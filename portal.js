/* prep. portal. Static-chart builder cannot support live RPC mutations.
   Canonical runtime copied verbatim. A presentation-only adapter formats ledger currency. */
(function () {
"use strict";

const InlineChartRuntime = (() => {
	if (typeof Chart !== "undefined" && Chart.defaults?.datasets?.line) {
		Chart.defaults.datasets.line.clip = 8
	}
	const strip = n => n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")
	const compact = v => {
		const a = Math.abs(v)
		if (a >= 1e12) return strip(a / 1e12) + "T"
		if (a >= 1e9) return strip(a / 1e9) + "B"
		if (a >= 1e6) return strip(a / 1e6) + "M"
		if (a >= 1e3) return strip(a / 1e3) + "K"
		return strip(a)
	}
	const currency = v => {
		const a = Math.abs(v)
		if (a === 0 || a >= 1) return compact(a)
		return a.toLocaleString("en-US", { maximumSignificantDigits: 3 })
	}
	const formatValue = (v, kind) => {
		if (v === null || v === undefined) return "Not available"
		if (typeof v !== "number" || !Number.isFinite(v)) {
			throw new Error("Non-finite chart value")
		}
		switch (kind) {
			case "currency":
				return (v < 0 ? "-" : "") + "$" + currency(v)
			case "count":
				return Math.round(v).toLocaleString("en-US")
			case "countCompact":
			case "numberCompact":
				return (v < 0 ? "-" : "") + compact(v)
			case "percent":
				return strip(v) + "%"
			case "percentagePoint":
				return strip(v) + " percentage points"
			case "ratio":
				return strip(v) + "×"
			case "durationMs":
				return Math.abs(v) < 1000 ? strip(v) + " ms" : strip(v / 1000) + " s"
			case "number":
				return Number(strip(v)).toLocaleString("en-US", {
					maximumFractionDigits: 2,
				})
			default:
				throw new Error("Unknown chart value kind: " + kind)
		}
	}
	const axisRange = (lo, hi, opts) => {
		const o = opts || {}
		if (!Number.isFinite(lo) || !Number.isFinite(hi) || lo > hi) {
			throw new Error("Axis range requires finite ordered values")
		}
		const target = o.target === undefined ? 5 : o.target
		if (!Number.isInteger(target) || target < 4 || target > 6) {
			throw new Error("Axis target must be an integer from 4 through 6")
		}
		const observedLo = lo
		const observedHi = hi
		if (Number.isFinite(o.floor) && o.floor > observedLo) {
			throw new Error("Axis floor excludes observed values")
		}
		if (Number.isFinite(o.cap) && o.cap < observedHi) {
			throw new Error("Axis cap excludes observed values")
		}
		if (o.zero) {
			lo = Math.min(0, lo)
			hi = Math.max(0, hi)
		}
		if (Number.isFinite(o.floor)) lo = o.floor
		if (hi === lo) {
			const pad = Math.abs(lo) * 0.06 || 1
			if (Number.isFinite(o.cap)) lo -= pad
			else hi += pad
		}
		const zeroIsUpperBound = o.zero && observedHi < 0
		const paddedHi = zeroIsUpperBound ? hi : hi + (hi - lo) * 0.06
		const span = paddedHi - lo || 1
		const exponent = Math.floor(Math.log10(span))
		const candidates = []
		for (let power = exponent - 3; power <= exponent + 1; power += 1) {
			for (const multiplier of [1, 2, 2.5, 5]) {
				const step = Number((multiplier * 10 ** power).toPrecision(12))
				let min
				let max
				if (Number.isFinite(o.floor)) {
					min = o.floor
					max = Number.isFinite(o.cap)
						? o.cap
						: Number(
								(
									min +
									Math.ceil((paddedHi - min) / step - 1e-9) * step
								).toPrecision(12),
							)
				} else if (Number.isFinite(o.cap)) {
					max = o.cap
					min = Number(
						(max - Math.ceil((max - lo) / step - 1e-9) * step).toPrecision(12),
					)
				} else {
					min = Number((Math.floor(lo / step + 1e-9) * step).toPrecision(12))
					max = Number(
						(
							min +
							Math.ceil((paddedHi - min) / step - 1e-9) * step
						).toPrecision(12),
					)
				}
				if (
					o.tight === true &&
					observedLo < 0 &&
					observedHi > 0 &&
					!Number.isFinite(o.floor) &&
					!Number.isFinite(o.cap)
				) {
					const pad = (observedHi - observedLo) * 0.06
					const tightMin = observedLo - pad
					const tightMax = observedHi + pad
					const ticks =
						Math.floor(tightMax / step + 1e-9) -
						Math.ceil(tightMin / step - 1e-9) +
						1
					if (ticks >= 4 && ticks <= 6) {
						candidates.push({
							min: tightMin,
							max: tightMax,
							step,
							includeBounds: false,
							score: Math.abs(ticks - target) * 0.1 + (2 * pad) / span,
						})
					}
				}
				const intervals = (max - min) / step
				const tickCount = Math.round(intervals) + 1
				if (
					Math.abs(intervals - Math.round(intervals)) < 1e-9 &&
					tickCount >= 4 &&
					tickCount <= 6 &&
					min <= observedLo &&
					max >= observedHi
				) {
					candidates.push({
						min,
						max,
						step,
						score:
							Math.abs(tickCount - target) * 0.1 +
							(max - min - (observedHi - observedLo)) / span,
					})
				}
			}
		}
		candidates.sort((a, b) => a.score - b.score || a.step - b.step)
		const range = candidates[0]
		if (!range) {
			throw new Error("Axis range cannot produce 4-6 aligned ticks")
		}
		if (o.zero && observedLo >= 0 && range.min < 0) {
			throw new Error(
				"Axis cap cannot preserve a zero baseline with 4-6 aligned ticks",
			)
		}
		if (range.includeBounds === false) {
			return {
				min: range.min,
				max: range.max,
				step: range.step,
				includeBounds: false,
			}
		}
		return { min: range.min, max: range.max, step: range.step }
	}
	const barPath = (x, w, y, y0, r) =>
		y0 - y < 8
			? "M " + x + " " + y0 + " V " + y + " H " + (x + w) + " V " + y0 + " Z"
			: "M " +
				x +
				" " +
				y0 +
				" V " +
				(y + r) +
				" Q " +
				x +
				" " +
				y +
				", " +
				(x + r) +
				" " +
				y +
				" H " +
				(x + w - r) +
				" Q " +
				(x + w) +
				" " +
				y +
				", " +
				(x + w) +
				" " +
				(y + r) +
				" V " +
				y0 +
				" Z"
	const lineLayout = (P, n) => {
		const inset = 8
		const left = P.left + inset
		const right = P.left + P.width - inset
		const xFor = i =>
			n === 1 ? (left + right) / 2 : left + ((right - left) / (n - 1)) * i
		const labelXFor = i =>
			i === 0 ? P.left : i === n - 1 ? P.left + P.width : xFor(i)
		const labelAnchorFor = i =>
			i === 0 ? "start" : i === n - 1 ? "end" : "middle"
		return { xFor, labelXFor, labelAnchorFor }
	}
	const cssVar = name =>
		getComputedStyle(document.documentElement).getPropertyValue(name).trim()
	const buildTooltip = (tip, title, rows) => {
		tip.textContent = ""
		const addDiv = (className, text) => {
			const node = document.createElement("div")
			node.className = className
			node.textContent = text
			tip.appendChild(node)
			return node
		}
		addDiv("tip-title", title)
		for (const item of rows) {
			if (Object.prototype.hasOwnProperty.call(item, "extra")) {
				addDiv("tip-extra", item.extra)
				continue
			}
			const row = addDiv("tip-row", "")
			const key = document.createElement("span")
			key.className = "tip-key"
			key.dataset.mark = item.mark || "square"
			key.style.background = item.color
			const label = document.createElement("span")
			label.className = "tip-label"
			label.textContent = item.label
			const value = document.createElement("span")
			value.className = "tip-value"
			value.textContent = item.value
			row.append(key, label, value)
		}
	}
	const positionTooltip = (tip, container, x, y) => {
		const left = Math.max(
			4,
			Math.min(x + 10, container.clientWidth - tip.offsetWidth - 4),
		)
		const above = y - tip.offsetHeight - 10
		// A below-pointer tooltip can otherwise enlarge an auto-sized artifact.
		const top = Math.max(
			4,
			Math.min(
				above >= 4 ? above : y + 10,
				container.clientHeight - tip.offsetHeight - 4,
			),
		)
		tip.style.left = left + "px"
		tip.style.top = top + "px"
	}
	const createAuditRetry = (host, maxRetries, delays, onFinalFail) => {
		let retries = 0
		let pending = false
		let timer = 0
		const schedule = (delay, action) => {
			pending = true
			timer = globalThis.setTimeout(() => {
				pending = false
				if (host?.isConnected === false || host?.dataset?.auditFailed) return
				action()
			}, delay)
		}
		const reset = () => {
			if (timer) globalThis.clearTimeout(timer)
			retries = 0
			pending = false
			timer = 0
		}
		const fail = (reason, onRetry) => {
			if (host?.dataset?.auditFailed || pending) return false
			if (retries < maxRetries) {
				const delay = delays[Math.min(retries, delays.length - 1)] || 0
				retries += 1
				schedule(delay, onRetry)
				return false
			}
			onFinalFail(reason)
			return false
		}
		const runAll = action => {
			let index = 0
			const next = () => {
				if (index >= maxRetries) return
				const delay = delays[Math.min(index, delays.length - 1)] || 0
				index += 1
				schedule(delay, () => {
					action()
					next()
				})
			}
			next()
		}
		return { fail, reset, runAll }
	}
	const createTooltip =
		(formatTitle, contextLabel = "") =>
		context => {
			const { chart, tooltip } = context
			const container = chart.canvas.parentElement
			const tip = container.querySelector(".chart-tooltip")
			if (!tooltip || tooltip.opacity === 0) {
				tip.dataset.visible = "false"
				tip.setAttribute("aria-hidden", "true")
				return
			}
			const rows = tooltip.dataPoints.flatMap(point => {
				const isLine = (point.dataset.type ?? chart.config.type) === "line"
				const rawColor = isLine
					? point.dataset.borderColor
					: point.dataset.backgroundColor
				const color = Array.isArray(rawColor)
					? rawColor[point.dataIndex]
					: rawColor
				let mark = "square"
				if (isLine) mark = "line"
				if (point.dataset.borderDash) mark = "dashed"
				const isXY =
					point.raw !== null &&
					typeof point.raw === "object" &&
					Object.prototype.hasOwnProperty.call(point.raw, "y")
				const row = {
					color,
					mark,
					label: point.dataset.label,
					value: formatValue(
						isXY ? point.raw.y : point.raw,
						point.dataset.valueKind,
					),
				}
				if (isXY && typeof point.dataset.xSeriesKey === "string") {
					return [
						{
							color,
							mark,
							label: point.dataset.xSeriesKey,
							value: formatValue(point.raw.x, point.dataset.xValueKind),
						},
						row,
					]
				}
				return [row]
			})
			if (contextLabel !== "") rows.push({ extra: contextLabel })
			const pointLabel =
				chart.data.labels?.[tooltip.dataPoints[0]?.dataIndex] ?? ""
			buildTooltip(tip, formatTitle(tooltip.title[0] || pointLabel), rows)
			tip.dataset.visible = "true"
			tip.setAttribute("aria-hidden", "false")
			positionTooltip(
				tip,
				container,
				chart.canvas.offsetLeft + tooltip.caretX,
				chart.canvas.offsetTop + tooltip.caretY,
			)
		}
	const crosshair = {
		id: "crosshair",
		beforeDatasetsDraw: chart => {
			const active = chart.tooltip?.getActiveElements?.() ?? []
			if (!active.length) return
			const x = active[0].element.x
			const area = chart.chartArea
			const ctx = chart.ctx
			ctx.save()
			ctx.beginPath()
			ctx.moveTo(x, area.top)
			ctx.lineTo(x, area.bottom)
			ctx.lineWidth = 1
			ctx.strokeStyle = cssVar("--border-strong") || "rgba(25,25,24,0.2)"
			ctx.stroke()
			ctx.restore()
		},
	}
	const stabilizationCleanup = new WeakMap()
	const createChartAudit = spec => {
		let retry
		const unsafeReason = chart => {
			const kinds = [
				...new Set(chart.data.datasets.map(dataset => dataset.valueKind)),
			]
			if (kinds.length !== 1 || !kinds[0]) {
				return "every dataset must declare one shared valueKind"
			}
			if (spec.valueKind && kinds[0] !== spec.valueKind) {
				return "axis expects valueKind " + spec.valueKind + ", got " + kinds[0]
			}
			for (const dataset of chart.data.datasets) {
				for (const value of dataset.data) {
					const parts =
						value !== null &&
						typeof value === "object" &&
						Object.prototype.hasOwnProperty.call(value, "x") &&
						Object.prototype.hasOwnProperty.call(value, "y")
							? [value.x, value.y]
							: Array.isArray(value)
								? value
								: [value]
					for (const part of parts) {
						if (part === null) continue
						if (typeof part !== "number" || !Number.isFinite(part)) {
							return "non-finite data value; missing must be null"
						}
					}
				}
			}
			const axisName = spec.valueAxis || "y"
			if (!chart.scales[axisName]) return "missing value axis " + axisName
			return ""
		}
		const policyReason = chart => {
			const kind = chart.data.datasets[0]?.valueKind
			const axis = chart.scales[spec.valueAxis || "y"]
			if (axis.ticks.length < 4 || axis.ticks.length > 6) {
				return "value axis needs 4-6 ticks, has " + axis.ticks.length
			}
			if (
				["count", "currency", "number"].includes(kind) &&
				Math.max(Math.abs(axis.min), Math.abs(axis.max)) >= 10000
			) {
				for (const tick of axis.ticks) {
					if (/[\d,]{5}/.test(String(tick.label).split(".")[0])) {
						return (
							"axis ticks must use compact formatting above 10K, found " +
							tick.label
						)
					}
				}
			}
			if (chart.options.animation !== false) return "animation must be false"
			if (chart.options.plugins?.tooltip?.enabled !== false) {
				return "canvas tooltip must be disabled (use the external tooltip)"
			}
			if (chart.config.type === "bar") {
				const meta = chart.getDatasetMeta(0)
				for (const element of meta.data) {
					const thickness =
						chart.options.indexAxis === "y" ? element.height : element.width
					if (thickness > 64) return "bar thickness exceeds the 64px cap"
				}
			}
			return ""
		}
		return {
			id: "audit",
			afterDestroy: chart => {
				retry?.reset()
				stabilizationCleanup.get(chart)?.()
				stabilizationCleanup.delete(chart)
			},
			afterUpdate: chart => {
				const host = chart.canvas.parentElement
				if (!host || host.dataset.auditFailed) return
				if (!retry) {
					retry = createAuditRetry(host, 2, [100, 500], reason => {
						host.dataset.auditFailed = "true"
						host.dataset.auditReason = reason
						host.textContent = "Chart failed validation: " + reason
					})
				}
				const unsafe = unsafeReason(chart)
				const policy = unsafe ? "" : policyReason(chart)
				if (policy) host.dataset.auditPolicy = policy
				else delete host.dataset.auditPolicy
				if (unsafe) {
					retry.fail(unsafe, () => {
						if (!chart.canvas?.isConnected || host.dataset.auditFailed) return
						chart.resize()
						chart.update("none")
					})
					return
				}
				retry.reset()
			},
		}
	}
	const stabilize = chart => {
		stabilizationCleanup.get(chart)?.()
		let frame = 0
		const host = chart.canvas.parentElement
		const retry = createAuditRetry(host, 2, [100, 500], () => {})
		const redraw = () => {
			frame = 0
			if (chart.canvas === null || !host.isConnected) return
			chart.draw()
			const canvas = chart.canvas
			canvas.style.opacity = canvas.style.opacity === "0.999" ? "1" : "0.999"
		}
		const scheduleRedraw = () => {
			if (frame) cancelAnimationFrame(frame)
			frame = requestAnimationFrame(() => {
				frame = requestAnimationFrame(redraw)
			})
		}
		const settle = () => {
			scheduleRedraw()
			retry.runAll(redraw)
		}
		const observer =
			typeof ResizeObserver === "undefined"
				? undefined
				: new ResizeObserver(scheduleRedraw)
		observer?.observe(host)
		stabilizationCleanup.set(chart, () => {
			if (frame) cancelAnimationFrame(frame)
			retry.reset()
			observer?.disconnect()
			window.removeEventListener("load", settle)
			window.removeEventListener("resize", scheduleRedraw)
		})
		if (document.readyState === "complete") settle()
		else window.addEventListener("load", settle, { once: true })
		window.addEventListener("resize", scheduleRedraw)
		return chart
	}
	const createLegendToggles = (chart, legendEl) => {
		chart.data.datasets.forEach((dataset, index) => {
			const button = document.createElement("button")
			button.type = "button"
			button.className = "legend-toggle"
			button.setAttribute("aria-pressed", "true")
			const isLine = chart.config.type === "line"
			const key = document.createElement("span")
			key.className = isLine ? "key-line" : "key-sq"
			if (dataset.borderDash) key.dataset.dash = "dashed"
			const color = dataset.borderColor || dataset.backgroundColor
			if (isLine) key.style.borderTopColor = color
			else key.style.background = color
			const label = document.createElement("span")
			label.textContent = dataset.label
			button.append(key, label)
			button.addEventListener("click", () => {
				const visible = chart.data.datasets.map((value, datasetIndex) =>
					chart.isDatasetVisible(datasetIndex),
				)
				visible[index] = !visible[index]
				if (!visible.some(Boolean)) return
				chart.setDatasetVisibility(index, visible[index])
				button.setAttribute("aria-pressed", String(visible[index]))
				chart.update("none")
			})
			legendEl.appendChild(button)
		})
	}
	const SVGNS = "http://www.w3.org/2000/svg"
	const el = (tag, attrs, parent) => {
		const node = document.createElementNS(SVGNS, tag)
		for (const key in attrs) node.setAttribute(key, attrs[key])
		if (parent) parent.appendChild(node)
		return node
	}
	const attachTooltip = (plot, onLineIndex) => {
		const tip = plot.querySelector(".chart-tooltip")
		const guide = plot.querySelector(".guide")
		const hide = () => {
			tip.dataset.visible = "false"
			tip.setAttribute("aria-hidden", "true")
			if (guide) guide.setAttribute("visibility", "hidden")
		}
		const show = (mark, clientX, clientY) => {
			const bounds = plot.getBoundingClientRect()
			let title = mark.dataset.heading
			let rows = [
				{
					color: "var(" + mark.dataset.color + ")",
					mark: mark.dataset.mark || "square",
					label: mark.dataset.label,
					value: mark.dataset.value,
				},
			]
			if (mark.dataset.extra) rows.push({ extra: mark.dataset.extra })
			if (mark.dataset.kind === "line" && onLineIndex) {
				const detail = onLineIndex(Number(mark.dataset.index), guide)
				if (Array.isArray(detail)) rows = detail
				else if (detail) {
					title = detail.title || title
					rows = detail.rows || rows
				}
			}
			buildTooltip(tip, title, rows)
			tip.dataset.visible = "true"
			tip.setAttribute("aria-hidden", "false")
			positionTooltip(tip, plot, clientX - bounds.left, clientY - bounds.top)
		}
		plot.addEventListener("pointermove", event => {
			const mark = event.target.closest
				? event.target.closest(".data-mark")
				: null
			if (mark) show(mark, event.clientX, event.clientY)
			else hide()
		})
		plot.addEventListener("pointerleave", hide)
		plot.addEventListener("focusin", event => {
			const mark = event.target.closest(".data-mark")
			if (!mark) return
			const bounds = mark.getBoundingClientRect()
			show(mark, bounds.left + bounds.width / 2, bounds.top)
		})
		plot.addEventListener("focusout", hide)
	}
	const svgAuditRetries = new WeakMap()
	const svgAudit = (plot, expectedMarks, rerender) => {
		let retry = svgAuditRetries.get(plot)
		if (!retry) {
			retry = createAuditRetry(plot, 2, [100, 500], reason => {
				plot.dataset.auditFailed = "true"
				plot.dataset.auditReason = reason
				plot.textContent = "Chart failed validation: " + reason
			})
			svgAuditRetries.set(plot, retry)
		}
		const fail = reason => retry.fail(reason, rerender)
		const svgNode = plot.querySelector("svg")
		if (!svgNode) return fail("missing svg")
		const marks = svgNode.querySelectorAll(".data-mark").length
		if (marks !== expectedMarks) {
			return fail("expected " + expectedMarks + " marks, found " + marks)
		}
		const rect = svgNode.getBoundingClientRect()
		const viewBox = (svgNode.getAttribute("viewBox") || "")
			.split(/[\s,]+/)
			.map(Number)
		if (rect.width > 0 && viewBox.length === 4 && viewBox[2] > 0) {
			const scale = rect.width / viewBox[2]
			for (const text of svgNode.querySelectorAll("text")) {
				const fontSize = parseFloat(getComputedStyle(text).fontSize || "12")
				if (fontSize * scale < 11) {
					return fail("effective text size below 11px after viewBox scaling")
				}
			}
			for (const text of svgNode.querySelectorAll("text")) {
				try {
					const box = text.getBBox()
					if (box.x < -1 || box.x + box.width > viewBox[2] + 1) {
						return fail("text clips at the plot edge: " + text.textContent)
					}
				} catch (error) {
					if (error instanceof TypeError || error instanceof DOMException) break
					throw error
				}
			}
			const labels = [...svgNode.querySelectorAll(".x-text")]
			for (let index = 1; index < labels.length; index += 1) {
				try {
					const previous = labels[index - 1].getBBox()
					const current = labels[index].getBBox()
					if (
						previous.x + previous.width > current.x &&
						current.x + current.width > previous.x
					) {
						return fail("category labels overlap")
					}
				} catch (error) {
					if (error instanceof TypeError || error instanceof DOMException) break
					throw error
				}
			}
		}
		retry.reset()
		delete plot.dataset.auditRetries
		delete plot.dataset.auditRetryPending
		return true
	}
	const chartJs = {
		createTooltip,
		crosshair,
		createAudit: createChartAudit,
		stabilize,
		createLegendToggles,
	}
	const svg = { el, attachTooltip, audit: svgAudit }
	return {
		formatValue,
		axisRange,
		barPath,
		lineLayout,
		cssVar,
		buildTooltip,
		positionTooltip,
		createAuditRetry,
		chartJs,
		svg,
	}
})()
const names = {python:'Python',pythonNextGen:'Python Next Generation',databases:'Databases',deviceConfig:'Device Configuration and Management',networking:'Networking',html5:'HTML5 Application Development'};
const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt = (v,currency='MDL') => new Intl.NumberFormat('ro-RO',{style:'currency',currency}).format(Number(v)||0);
const date = (v,short=false) => v ? new Date(v).toLocaleString('ro-RO',{timeZone:'Europe/Chisinau',dateStyle:'short',...(short?{}:{timeStyle:'short'})}) : '—';
const day = () => new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Chisinau'}).format(new Date());
const examOptions = (empty='Alege examenul') => `<option value="">${empty}</option>`+Object.entries(names).map(([k,n])=>`<option value="${k}">${n}</option>`).join('');
const examPicker=()=>`<div class="pp-multi-options">${Object.entries(names).map(([k,n])=>`<label class="pp-multi-option"><input type="checkbox" name="exams" value="${k}"><span class="pp-mini-exam" aria-hidden="true">${EXAM_ICONS[k]||''}</span><span>${n}</span></label>`).join('')}</div><div class="pp-multi-tools"><button type="button" class="pp-select-all" data-exams-all>Selectează toate</button><button type="button" class="pp-select-all" data-exams-none>Șterge selecția</button></div>`;
const selectedExams=f=>new FormData(f).getAll('exams');
const formData = f => Object.fromEntries(new FormData(f).entries());
let uid=null, admin=false, rolePromise=null, heartbeat=null, busySync=false, chart=null, overview=null, tab='overview', offset=0, paymentOffset=0, history=[], historyCursor=null, detailId=null, lastPing=0, generation=0;
const api = async (name,args={}) => { const {data,error}=await sb.rpc(name,args); if(error)throw Error(error.message||'Cererea nu a reușit.'); return data; };
function message(text,error=false){const el=document.querySelector('#pp-message');el.textContent=text;el.hidden=!text;el.classList.toggle('pp-error',error);}
function humanError(e){if(e.message.includes('Chart is not defined'))return 'Biblioteca pentru diagrame nu s-a încărcat. Verifică assets/vendor/chart.umd.js în site-ul publicat și reîncarcă pagina.';return `${e.message} Dacă funcțiile prep_ nu există, rulează fișierul SQL livrat în Supabase > SQL Editor, apoi reconectează-te.`;}
function panel(id,html){let s=document.createElement('section');s.id=id;s.className='screen';s.innerHTML=html;document.body.insertBefore(s,document.body.lastElementChild);return s;}
const icons={history: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10a9 9 0 1 1 1.6 7M3 4v6h6"/><path d="M12 7v5l3 2"/></svg>`,plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`,grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="m8 12-2 9 6-3 6 3-2-9"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'};
const themeIcons=()=>document.querySelector('#theme-toggle').innerHTML;
const head=(title,sub,kind)=>`<header class="pp-brand-header"><div class="pp-brand-nav"><button class="pp-logo-link" data-pp-back aria-label="Prep. — Înapoi la examene"><img src="assets/logo.png" alt="Prep." class="logo-mark"></button><nav class="pp-brand-actions" aria-label="Meniul contului"><button class="btn btn-ghost btn-ghost-dark pp-dashboard-link" data-pp-back>${icons.grid}<span>Examene</span></button><button class="btn btn-ghost btn-ghost-dark" data-pp-guide>Ghid</button><div class="pp-icon-pair"><button class="theme-toggle pp-history-icon ${kind==='history'?'is-current':''}" data-pp-history title="Istoricul testelor" aria-label="Istoricul testelor" ${kind==='history'?'aria-current="page"':''}>${icons.history}</button><button class="theme-toggle" data-msg-btn title="Mesaje" aria-label="Mesaje" aria-haspopup="dialog" aria-expanded="false"></button></div><button class="profile-btn" data-pp-profile aria-label="Profilul meu"><span class="avatar"></span><span class="pp-account-name"></span></button><button class="btn btn-ghost btn-ghost-dark pp-logout" data-pp-logout>Ieși</button></nav></div><div class="pp-brand-copy"><p class="pp-eyebrow">${kind==='history'?'SPAȚIUL TĂU DE ÎNVĂȚARE':'PANOU DE ADMINISTRARE'}</p><h1>${title}</h1><p>${sub}</p>${kind==='history'?'<button class="btn pp-hero-cta" data-pp-back>Continuă pregătirea <span aria-hidden="true">→</span></button>':`<button class="btn pp-hero-cta" data-new-sale>${icons.plus} Vânzare manuală</button>`}</div></header>`;
panel('screen-admin',`${head('Administrare prep.','Tot ce ai nevoie pentru a gestiona accesul și vânzările.','admin')}<main class="pp-shell pp-admin-shell">
 <div class="pp-actions"><button id="pp-refresh" class="btn btn-secondary">Actualizează datele</button><span id="pp-asof" class="pp-muted"></span></div>
 <p id="pp-message" role="status" aria-live="polite" class="pp-status" hidden></p>
 <nav class="pp-tabs" role="tablist" aria-label="Administrare"><button id="pp-tab-overview" role="tab" aria-controls="pp-overview" aria-selected="true" data-tab="overview" class="btn btn-secondary">Prezentare</button><button id="pp-tab-users" role="tab" aria-controls="pp-users" aria-selected="false" data-tab="users" class="btn btn-secondary">Utilizatori</button><button id="pp-tab-money" role="tab" aria-controls="pp-money" aria-selected="false" data-tab="money" class="btn btn-secondary">Bani</button><button id="pp-tab-messages" role="tab" aria-controls="pp-messages" aria-selected="false" data-tab="messages" class="btn btn-secondary">Mesaje</button></nav>
 <section id="pp-overview" role="tabpanel" aria-labelledby="pp-tab-overview"></section>
  <section id="pp-messages" role="tabpanel" aria-labelledby="pp-tab-messages" hidden><div class="pp-panel"><h2>Trimite un mesaj</h2><p class="pp-muted">Utilizatorii îl văd în clopoțelul din antet, la Mesaje.</p><form id="pp-msg-form" class="pp-form"><label>Către<select name="aud"><option value="all">Toți utilizatorii</option><option value="active">Utilizatorii cu acces activ</option><option value="email">Un singur utilizator (după email)</option></select></label><label id="pp-msg-email" hidden>Emailul contului<input name="email" type="email" maxlength="254" placeholder="adresa@email.com"></label><label>Șablon<select name="tpl"></select></label><label>Titlu<input name="title" maxlength="120" required></label><label>Mesaj<textarea name="body" rows="4" maxlength="600" required></textarea></label><button class="btn btn-primary">Trimite mesajul</button></form><p id="pp-msg-status" class="pp-status" role="status" hidden></p></div><div class="pp-panel"><h2>Mesaje trimise</h2><div id="pp-msg-sent"></div></div></section>
 <section id="pp-users" role="tabpanel" aria-labelledby="pp-tab-users" hidden> <div class="pp-panel"><h2>Toți utilizatorii</h2><form id="pp-search" class="pp-form"><label>Caută după nume, prenume, email sau telefon<input name="query" maxlength="200" type="search"></label><button class="btn btn-secondary">Caută</button></form><div id="pp-user-list"></div><div class="pp-pager"><button class="btn btn-secondary" id="pp-users-prev">Înapoi</button><span id="pp-user-pages"></span><button class="btn btn-secondary" id="pp-users-next">Înainte</button></div></div></section>
 <section id="pp-money" role="tabpanel" aria-labelledby="pp-tab-money" hidden><div id="pp-money-summary"></div><div class="pp-panel"><h2>Încasări înregistrate, pe lună (MDL)</h2><p class="pp-muted">Ultimele 12 luni. Luna curentă este incompletă. Sunt excluse înregistrările anulate. Nu reprezintă profit și nu este o integrare cu procesatorul de plăți.</p><div id="pp-money-chart"></div></div><div class="pp-panel"><div class="pp-section-heading"><div><h2>Registrul plăților</h2><p class="pp-muted">Toate încasările, într-un singur loc.</p></div><button class="btn btn-primary" data-new-sale>${icons.plus} Vânzare manuală</button></div><p class="pp-muted">Vânzarea nouă acordă accesul la examenele selectate. Plățile introduse separat din detaliul utilizatorului nu acordă automat acces.</p><form id="pp-pay-filter" class="pp-form"><label>Luna (gol = toate)<input name="month" type="month"></label><button class="btn btn-secondary">Filtrează</button></form><div id="pp-payment-list"></div><div class="pp-pager"><button id="pp-pay-prev" class="btn btn-secondary">Înapoi</button><span id="pp-payment-pages"></span><button id="pp-pay-next" class="btn btn-secondary">Înainte</button></div></div></section></main>`);
panel('screen-history',`${head('Fiecare test, un pas înainte.','Revino la rezultatele tale și vezi cum a mers ultima sesiune.','history')}<main class="pp-shell pp-history-shell"><section id="pp-history-summary" class="pp-history-summary" aria-label="Rezumatul testelor afișate"></section><p id="pp-history-status" role="status" aria-live="polite" class="pp-status" hidden></p><section class="pp-panel pp-history-panel" aria-labelledby="pp-history-title"><div class="pp-history-toolbar"><div><p class="pp-eyebrow">ACTIVITATEA TA</p><h2 id="pp-history-title">Istoricul testelor</h2></div><form id="pp-history-filter" class="pp-history-filter"><label class="pp-sr" for="pp-history-exam">Filtrează după examen</label><select id="pp-history-exam" name="exam">${examOptions('Toate examenele')}</select><button class="pp-refresh-icon" aria-label="Actualizează istoricul" title="Actualizează istoricul">${icons.history}</button></form></div><div id="pp-history-list" aria-live="polite"></div><div class="pp-history-footer"><span class="pp-muted">Ore locale · Europe/Chisinau</span><button id="pp-history-more" class="btn btn-secondary" hidden>Încarcă mai multe</button></div></section><p class="pp-history-footnote">Istoricul include testele finalizate după activarea acestei funcții. Rezultatele mai vechi rămân în progresul examenului.</p></main>`);
const dialog=document.createElement('dialog');dialog.className='pp-dialog';dialog.id='pp-detail';dialog.setAttribute('aria-label','Gestionare utilizator');document.body.appendChild(dialog);
function destroyChart(){chart?.destroy();chart=null;}
function historyPoints(r){return Number.isFinite(Number(r.points)) && r.points !== null ? Number(r.points) : Math.round(r.correct/r.total*1000);}
function historyTable(rows){if(!rows.length)return '<p class="pp-muted">Nu există teste finalizate în istoricul nou.</p>';return `<div class="pp-table-wrap"><table class="pp-table"><thead><tr><th>Data</th><th>Examen</th><th>Regim</th><th>Scor</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(date(r.completed_at))}</td><td>${esc(names[r.exam_key]||r.exam_key)}</td><td>${r.mode==='exam'?'Examen':'Practică'}</td><td>${historyPoints(r)} / 1000 · ${historyPoints(r)>=700?"Admis":"Sub prag"}</td></tr>`).join('')}</tbody></table></div>`;}
function historyCards(rows){
 const summary=document.querySelector('#pp-history-summary');
 if(!rows.length){summary.innerHTML='';return `<div class="pp-empty"><span class="pp-empty-icon">${icons.history}</span><h3>Povestea ta începe cu primul test.</h3><p>Finalizează o sesiune de practică sau un test în regim examen. Rezultatul te va aștepta aici.</p><button class="btn btn-primary" data-pp-continue>Începe un test <span aria-hidden="true">→</span></button></div>`;}
 const scores=rows.map(historyPoints),best=Math.max(...scores),last=rows[0];
 summary.innerHTML=`<div class="pp-history-stat"><span class="pp-stat-icon">${icons.history}</span><div><strong>${rows.length}</strong><span>Teste afișate</span></div></div><div class="pp-history-stat"><span class="pp-stat-icon pp-stat-green">${icons.award}</span><div><strong>${best}<small> / 1000</small></strong><span>Cel mai bun scor afișat</span></div></div><div class="pp-history-stat"><span class="pp-stat-icon pp-stat-orange">${icons.clock}</span><div><strong>${esc(new Date(last.completed_at).toLocaleDateString('ro-RO',{timeZone:'Europe/Chisinau',day:'numeric',month:'short'}))}</strong><span>Ultimul test afișat</span></div></div>`;
 return `<ol class="pp-history-cards">${rows.map(r=>{const points=historyPoints(r),pct=points/10,total=Number(r.total),correct=Number(r.correct),seconds=Number(r.seconds)||0,exam=r.mode==='exam',stamp=new Date(r.completed_at),color={python:'#3268d5',databases:'#087e75',deviceConfig:'#7852c6',networking:'#ad660c',html5:'#bd4a26'}[r.exam_key]||'#3268d5',abbr={python:'PY',databases:'DB',deviceConfig:'DC',networking:'NW',html5:'< / >'}[r.exam_key]||'EX';return `<li class="pp-test-card" style="--exam-color:${color}"><span class="pp-exam-art" aria-hidden="true">${EXAM_ICONS[r.exam_key]||icons.grid}</span><div class="pp-test-main"><div class="pp-test-top"><h3>${esc(names[r.exam_key]||r.exam_key)}</h3><span class="pp-mode ${exam?'pp-mode-exam':''}">${exam?'Examen':'Practică'}</span></div><div class="pp-test-meta"><time datetime="${esc(r.completed_at)}">${esc(date(r.completed_at))}</time><span>${Math.floor(seconds/60)} min ${seconds%60} sec</span></div><div class="pp-score-track" role="img" aria-label="Scor ${points} din 1000"><span style="width:${pct}%"></span></div><p class="pp-result-caption">${correct} din ${total} răspunsuri corecte</p></div><div class="pp-test-score"><strong>${points}<small>/1000</small></strong><span>${points>=700?"Admis":"Sub pragul 700"}</span></div></li>`}).join('')}</ol>`;
}
function drawChart(id,points,kind,label,monthly=false){
 destroyChart();const host=document.getElementById(id);if(!host)return;
 const values=points.map(p=>Number(p.value)); if(values.some(v=>!Number.isFinite(v)||v<0))throw Error('Date invalide pentru diagramă.');
 const labels=points.map(p=>new Date(p.date+'T12:00:00Z').toLocaleDateString('ro-RO',{month:monthly?'long':'short',...(!monthly?{day:'numeric'}:{}),year:'numeric'}));
 host.className='pp-chart';host.innerHTML=`<p class="pp-sr">${esc(label)}, de la ${esc(labels[0])} până la ${esc(labels.at(-1))}. Valorile exacte sunt în tabel.</p><div class="chart-wrap"><canvas role="img" aria-label="${esc(label)}. Tabelul de mai jos conține valorile exacte."></canvas><div class="chart-tooltip" aria-hidden="true"></div></div><details><summary>Vezi valorile exacte și datele</summary><div class="pp-table-wrap"><table class="pp-table"><thead><tr><th>${monthly?'Luna':'Data'}</th><th>${esc(label)}</th></tr></thead><tbody>${points.map((p,i)=>`<tr><td>${esc(labels[i])}</td><td>${kind==='currency'?fmt(p.value):esc(p.value)}</td></tr>`).join('')}</tbody></table></div></details>`;
 const style=getComputedStyle(host),muted=style.getPropertyValue('--muted').trim(),grid=style.getPropertyValue('--grid').trim(),purple='#bf8eda';
 const range=InlineChartRuntime.axisRange(0,Math.max(kind==='count'?4:0,...values),{zero:true,target:5});
 const canonicalTooltip=InlineChartRuntime.chartJs.createTooltip(v=>v);
 // Keep canonical tooltip construction and geometry; adapt only the ledger currency.
 const externalTooltip=context=>{canonicalTooltip(context);if(kind!=='currency'||!context.tooltip?.opacity)return;
 const tip=context.chart.canvas.parentElement.querySelector('.chart-tooltip');
 tip.querySelectorAll('.tip-value').forEach((el,i)=>{const raw=context.tooltip.dataPoints[i]?.raw;if(typeof raw==='number')el.textContent=fmt(raw);});
 InlineChartRuntime.positionTooltip(tip,context.chart.canvas.parentElement,context.chart.canvas.offsetLeft+context.tooltip.caretX,context.chart.canvas.offsetTop+context.tooltip.caretY);};

 chart=new Chart(host.querySelector('canvas'),{type:'line',plugins:[InlineChartRuntime.chartJs.crosshair,InlineChartRuntime.chartJs.createAudit({valueAxis:'y',valueKind:kind})],data:{labels,datasets:[{label,valueKind:kind,data:values,borderColor:purple,borderWidth:2,tension:0,fill:true,backgroundColor:purple+'2e',pointRadius:3.5,pointHoverRadius:5,pointBackgroundColor:purple,clip:8}]},options:{responsive:true,maintainAspectRatio:false,animation:false,onResize:c=>{const tip=c.canvas.parentElement.querySelector('.chart-tooltip');if(tip)tip.dataset.visible='false';},interaction:{mode:'index',intersect:false,axis:'x'},plugins:{legend:{display:false},tooltip:{enabled:false,external:externalTooltip}},scales:{x:{grid:{display:false},ticks:{color:muted,autoSkip:true,maxTicksLimit:monthly?6:7,maxRotation:0}},y:{min:range.min,max:range.max,ticks:{stepSize:range.step,color:muted,callback:v=>kind==='currency'?InlineChartRuntime.formatValue(v,'numberCompact')+' MDL':InlineChartRuntime.formatValue(v,'countCompact')},grid:{color:grid}}}}});InlineChartRuntime.chartJs.stabilize(chart);
}
const metric=(value,label)=>`<div class="pp-metric"><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`;
async function loadOverview(){const days=Number(document.querySelector('#pp-days')?.value||30);overview=await api('prep_admin_overview',{p_days:days});if(!admin)return;
 document.querySelector('#pp-asof').textContent='Actualizat: '+date(overview.as_of);
 document.querySelector('#pp-overview').innerHTML=`<div class="pp-grid">${metric(overview.accounts,'Conturi înregistrate')}${metric(overview.confirmed,'Email confirmat')}${metric(overview.pending,'Email neconfirmat')}${metric(overview.active_7d,'Activi în ultimele 7 zile')}${metric(overview.completed_tests,'Teste în istoricul nou')}</div><div class="pp-panel"><div class="pp-form"><label>Perioada înscrierilor<select id="pp-days">${[7,30,90].map(n=>`<option value="${n}" ${n===days?'selected':''}>Ultimele ${n} zile</option>`).join('')}</select></label></div><p class="pp-muted">${overview.new_accounts} conturi noi: ${overview.new_confirmed} cu email confirmat acum, ${overview.new_pending} neconfirmate acum. Confirmarea nu este un eveniment istoric pe zi.</p><h2>Conturi create pe zi</h2><div id="pp-registration-chart"></div></div><p class="pp-muted">Activ = cont autentificat care a deschis aplicația și a transmis o prezență în ultimele 7 zile; nu înseamnă timp de studiu. Măsurarea prezenței și istoricul detaliat încep cu această versiune. Progresul vechi sincronizat rămâne vizibil. Statisticile nu includ vizitatorii anonimi ai primei pagini.</p>`;
 document.querySelector('#pp-days').addEventListener('change',()=>run(loadOverview));
 drawChart('pp-registration-chart',overview.registrations,'count','Conturi create');}
async function loadUsers(){const q=document.querySelector('#pp-search input').value.trim();const r=await api('prep_admin_users',{p_query:q,p_offset:offset});if(!admin)return;
 let streaks=null;try{streaks=await api('prep_admin_daily_streaks',{p_user_ids:r.rows.map(u=>u.id)});}catch(e){console.warn('Seria de zile nu este disponibilă:',e.message)}if(!admin)return;
 document.querySelector('#pp-user-list').innerHTML=(!streaks?'<p class="pp-status pp-error" role="status">Seria de zile nu este disponibilă. Verifică instalarea scriptului serie-zile.sql și conexiunea.</p>':'')+(r.rows.some(u=>!Object.prototype.hasOwnProperty.call(u,'last_name'))?'<p class="pp-status pp-error" role="status">Actualizarea SQL pentru nume nu este instalată. Rulează fișierul prep-profil-nume-supabase.sql în Supabase, apoi actualizează datele.</p>':'')+(r.rows.length?`<div class="pp-table-wrap"><table class="pp-table"><thead><tr><th>Utilizator</th><th>Telefon</th><th>Examene și progres</th><th>Serie zile</th><th>Activitate</th><th></th></tr></thead><tbody>${r.rows.map(u=>`<tr><td><strong>${esc([u.last_name,u.first_name].filter(Boolean).join(' ')||'Nume necompletat')}</strong><br><span>${esc(u.email)}</span><br><span class="pp-muted">${u.confirmed?'Confirmat':'Email neconfirmat'} · Creat: ${esc(date(u.created_at,true))}</span></td><td class="pp-phone-cell"><strong class="pp-phone-value">${esc(Object.prototype.hasOwnProperty.call(u,'contact_phone')?(u.contact_phone||'Neadăugat'):'SQL neactualizat')}</strong></td><td>${u.exams.length?u.exams.map(e=>`<div><span class="pp-chip">${esc(names[e.key])}</span>${Math.max(e.answered,e.question_floor)}/${e.total}<span class="pp-muted"> întrebări · ${e.tests} teste</span></div>`).join(''):'Fără examene'}</td><td>${u.exams.length?(streaks&&Object.prototype.hasOwnProperty.call(streaks,u.id)?esc(streaks[u.id])+' zile':'—'):'—'}</td><td>${esc(date(u.last_seen))}<br><span class="pp-muted">Ultima autentificare: ${esc(date(u.last_sign_in))}</span></td><td><button class="btn btn-secondary" data-manage="${u.id}">Gestionează</button></td></tr>`).join('')}</tbody></table></div>`:'<p>Nu s-au găsit utilizatori.</p>');
 document.querySelector('#pp-user-pages').textContent=`${r.total?offset+1:0}–${Math.min(offset+30,r.total)} din ${r.total}`;document.querySelector('#pp-users-prev').disabled=offset===0;document.querySelector('#pp-users-next').disabled=offset+30>=r.total;}
function paymentTable(rows,withEmail=true){return rows.length?`<div class="pp-table-wrap"><table class="pp-table"><thead><tr><th>Data / cont</th><th>Examen</th><th>Sumă</th><th>Notă</th><th></th></tr></thead><tbody>${rows.map(p=>`<tr class="${p.voided_at?'pp-void':''}"><td>${esc(p.paid_on)}${withEmail?'<br>'+esc(p.email):''}</td><td>${esc(p.exam_keys?.length?p.exam_keys.map(k=>names[k]||k).join(', '):(names[p.exam_key]||'Pachet / general'))}</td><td>${p.amount_mdl!=null?fmt(p.amount_mdl):fmt(p.amount_eur,'EUR')}</td><td>${esc(p.note)}${p.voided_at?'<br>Anulată: '+esc(p.void_reason):''}</td><td>${p.voided_at?'Anulată':`<button class="btn btn-secondary pp-danger" data-void="${p.id}">Anulează</button>`}</td></tr>`).join('')}</tbody></table></div>`:'<p class="pp-muted">Nu sunt plăți înregistrate.</p>';}
async function loadPayments(){const month=document.querySelector('#pp-pay-filter input').value;const r=await api('prep_admin_payments',{p_month:month||null,p_offset:paymentOffset});if(!admin)return;document.querySelector('#pp-payment-list').innerHTML=`<p>Total în filtrul ales, fără anulări: <strong>${fmt(r.sum_mdl)}</strong>${Number(r.sum_eur)>0?' · Încasări în EUR, separat: <strong>'+fmt(r.sum_eur,'EUR')+'</strong>':''}</p>`+paymentTable(r.rows);document.querySelector('#pp-payment-pages').textContent=`${r.total?paymentOffset+1:0}–${Math.min(paymentOffset+50,r.total)} din ${r.total}`;document.querySelector('#pp-pay-prev').disabled=!paymentOffset;document.querySelector('#pp-pay-next').disabled=paymentOffset+50>=r.total;}
async function loadMoney(){overview=await api('prep_admin_overview',{p_days:30});if(!admin)return;document.querySelector('#pp-money-summary').innerHTML=`<div class="pp-grid">${metric(fmt(overview.current_month_mdl),'Luna curentă, până acum')}${metric(fmt(overview.previous_month_mdl),'Luna precedentă, completă')}</div>${Number(overview.legacy_eur_total)>0?'<p class="pp-muted">Încasări în EUR, total: '+fmt(overview.legacy_eur_total,'EUR')+'. Păstrate separat, fără conversie și fără includere în diagrama MDL.</p>':''}`;drawChart('pp-money-chart',overview.payments,'currency','Încasări înregistrate (MDL)',true);await loadPayments();}
async function switchTab(next){tab=next;destroyChart();document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===tab)));['overview','users','money','messages'].forEach(t=>document.getElementById('pp-'+t).hidden=t!==tab);await ({overview:loadOverview,users:loadUsers,money:loadMoney,messages:loadMessages}[tab])();}
async function openUser(id){detailId=id;const u=await api('prep_admin_user',{p_user_id:id});if(!admin)return;
 dialog.innerHTML=`<div class="pp-head"><div><h2>${esc([u.last_name,u.first_name].filter(Boolean).join(' ')||'Nume necompletat')}<span class="pp-muted" style="display:block;font-size:14px">${esc(u.email)}</span><span class="pp-muted" style="display:block;font-size:14px">Telefon: ${esc(u.contact_phone||'Neadăugat')}</span></h2><span class="pp-muted">${u.confirmed?'Email confirmat':'Email neconfirmat'} · Creat: ${esc(date(u.created_at))}</span></div><button class="btn btn-secondary" data-close>Închide</button></div><p id="pp-detail-status" class="pp-status" role="status" hidden></p>
 <div class="pp-panel"><h2>Acces și progres</h2><p class="pp-muted">Accesul nou se acordă la înregistrarea unei vânzări.</p>
 ${u.exams.map(e=>{const a=Math.min(e.total,Math.max(e.answered,e.question_floor)),w=Math.min(e.course_total,Math.max(e.watched,e.course_floor));return `<section class="pp-detail-exam"><div class="pp-bottom"><strong>${esc(names[e.key])}</strong><button class="btn btn-secondary pp-danger" data-revoke="${e.key}">Retrage accesul</button></div><p>Întrebări: ${a}/${e.total} · Video: ${w}/${e.course_total}<br><span class="pp-muted">Real: ${e.answered} întrebări și ${e.watched} video. Teste agregate: ${e.tests}; cel mai bun scor: ${e.best_points ?? e.best * 10} / 1000.</span></p><div class="pp-progress"><i style="width:${e.total?a/e.total*100:0}%"></i></div><details><summary>Acordă / ajustează progresul manual</summary><p class="pp-muted">Se afișează maximul dintre progresul real și valoarea acordată. Zero elimină creditul manual. Progresul contează și pentru certificatul intern de parcurgere la 100%. Nu schimbă răspunsurile sau scorurile testelor.</p><form class="pp-form" data-progress="${e.key}"><label>Întrebări acordate (0–${e.total})<input name="questions" type="number" min="0" max="${e.total}" step="1" value="${e.question_floor}" required></label><label>Video acordate (0–${e.course_total})<input name="courses" type="number" min="0" max="${e.course_total}" step="1" value="${e.course_floor}" required></label><label>Motiv<input name="reason" minlength="3" maxlength="500" value="${esc(e.adjustment_reason||'')}" required></label><button class="btn btn-secondary">Salvează progresul</button></form></details></section>`}).join('')||'<p class="pp-muted">Fără examene activate.</p>'}</div>
 <div class="pp-panel"><h2>Înregistrează o plată</h2><form id="pp-payment-add" class="pp-form" data-payment-id="${crypto.randomUUID()}"><label>Examen<select name="exam">${examOptions('Pachet / general')}</select></label><label>Suma (MDL)<input name="amount" type="number" min="0.01" max="999999999.99" step="0.01" required></label><label>Data plății<input name="paid_on" type="date" min="2010-01-01" max="${day()}" value="${day()}" required></label><label>Notă<input name="note" maxlength="500" placeholder="Referință sau detalii"></label><button class="btn btn-primary">Înregistrează plata</button></form><p class="pp-muted">Evidență manuală în MDL. Nu debitează carduri și nu oferă automat acces. Nu introduce date de card.</p><h3>Ultimele 50 de plăți</h3>${paymentTable(u.payments,false)}</div><div class="pp-panel"><h2>Ultimele 20 de teste înregistrate</h2><p class="pp-muted">Scorurile sunt raportate de aplicația client; nu sunt rezultate oficiale sau verificate prin supraveghere.</p>${historyTable(u.history)}</div>`;
 dialog.insertAdjacentHTML('beforeend',userMsgPanel());if(!dialog.open)dialog.showModal();dialog.querySelector('[data-close]').onclick=()=>dialog.close();}
async function refreshOwnAccess(){const s=await sb.auth.getSession();const id=s.data.session?.user.id;if(!id)return;const r=await sb.from('user_exams').select('exam_key').eq('user_id',id);if(r.error)throw r.error;allowedExams=(r.data||[]).map(x=>x.exam_key);}
async function afterMutation(){await loadUsers();if(detailId&&dialog.open)await openUser(detailId);await refreshOwnAccess();await loadAdjustments();}
async function run(fn,button){if(button)button.disabled=true;message('Se încarcă…');try{await fn();message('');}catch(e){message(humanError(e),true);if(dialog.open){let s=dialog.querySelector('#pp-detail-status');s.textContent=e.message;s.hidden=false;}}finally{if(button?.isConnected)button.disabled=false;}}
async function loadAdjustments(){if(!uid)return;const requestedUid=uid;try{const a=await api('prep_my_adjustments');if(uid!==requestedUid)return;window.PrepPortal.adjustments=a||{};window.prepRefreshProgress?.();}catch(e){console.warn('Progres manual indisponibil:',e.message);}}
function queueKey(){return 'prep_test_queue_v1_'+uid;}
function readQueue(){try{return JSON.parse(localStorage.getItem(queueKey())||'[]');}catch{return [];}}
function storeQueue(q){localStorage.setItem(queueKey(),JSON.stringify(q));}
async function syncTests(){if(!uid||busySync||!navigator.onLine)return;busySync=true;const current=uid;try{for(const item of readQueue()){if(uid!==current)break;await api('prep_record_test',item);if(uid!==current)break;storeQueue(readQueue().filter(x=>x.p_id!==item.p_id));}historyStatus();}catch(e){historyStatus('Istoricul a rămas în așteptare: '+humanError(e),true);}finally{busySync=false;}}
function historyStatus(text='',error=false){const s=document.querySelector('#pp-history-status');const pending=uid?readQueue().length:0;s.textContent=text||(pending?`${pending} teste așteaptă sincronizarea. Nu șterge datele browserului înainte de sincronizare.`:'');s.hidden=!s.textContent;s.classList.toggle('pp-error',error);}
window.PrepPortal={adjustments:{},recordTest:async payload=>{if(!uid)return;try{const q=readQueue();if(!q.some(x=>x.p_id===payload.p_id))q.push(payload);storeQueue(q);await syncTests();}catch(e){alert('Istoricul nu a putut fi salvat local: '+e.message);}}};
async function loadHistory(reset=false){if(reset){history=[];historyCursor=null;}const args={p_exam:document.querySelector('#pp-history-filter select').value||null,...(historyCursor?{p_before:historyCursor.completed_at,p_before_id:historyCursor.id}:{})};await syncTests();const rows=await api('prep_my_history',args);history.push(...rows);historyCursor=rows.at(-1)||historyCursor;document.querySelector('#pp-history-list').innerHTML=historyCards(history);document.querySelector('#pp-history-more').hidden=rows.length<20;historyStatus();}
async function ping(){if(!uid||document.hidden||Date.now()-lastPing<55000)return;lastPing=Date.now();try{await api('prep_ping');}catch(e){/* Read-only/offline sessions retry on the next visible heartbeat. */}}
async function initPortal(){if(rolePromise)return rolePromise;const gen=++generation;
 rolePromise=(async()=>{const sess=await sb.auth.getSession(),user=sess.data.session?.user;if(!user)return;if(gen!==generation)return;uid=user.id;window.PrepPortal.adjustments={};
 try{const allowed=await api('prep_is_admin');if(gen!==generation)return;admin=allowed===true;document.querySelector('#admin-btn').hidden=!admin;document.querySelector('#admin-btn').title='Administrare verificată de Supabase';}catch(e){admin=false;document.querySelector('#admin-btn').hidden=true;console.warn('Admin: rulează migrarea SQL dacă nu este instalată.',e.message);}
 await loadAdjustments();await ping();await syncTests();if(!heartbeat)heartbeat=setInterval(ping,60000);
 })();try{await rolePromise;}finally{rolePromise=null;}}
const originalDashboard=renderDashboard;
renderDashboard=function(){originalDashboard();initPortal();};
document.querySelector('#admin-btn').onclick=()=>run(async()=>{await initPortal();if(!admin)throw Error('Acces Admin refuzat.');paintAccountChrome();showScreen('screen-admin');await switchTab('overview');});
document.querySelector('#history-btn').onclick=async()=>{paintAccountChrome();showScreen('screen-history');try{await initPortal();await loadHistory(true);}catch(e){historyStatus(humanError(e),true);}};
document.querySelector('#pp-history-filter').onsubmit=async e=>{e.preventDefault();try{await loadHistory(true);}catch(er){historyStatus(humanError(er),true);}};
document.querySelector('#pp-history-more').onclick=async()=>{try{await loadHistory();}catch(e){historyStatus(e.message,true);}};
document.querySelectorAll('[data-pp-back]').forEach(b=>b.onclick=()=>run(async()=>{destroyChart();await refreshOwnAccess();renderDashboard();showScreen('screen-dashboard');}));
document.querySelectorAll('[data-pp-theme]').forEach(b=>b.onclick=async()=>{await setTheme(currentTheme()==='dark'?'light':'dark');if(admin&&document.querySelector('#screen-admin').classList.contains('active'))await run(()=>switchTab(tab));});
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>run(()=>switchTab(b.dataset.tab),b));
document.querySelector('#pp-refresh').onclick=()=>run(()=>switchTab(tab));
document.querySelector('#pp-search').onsubmit=e=>{e.preventDefault();offset=0;run(loadUsers);};
document.querySelector('#pp-users-prev').onclick=()=>{offset=Math.max(0,offset-30);run(loadUsers);};document.querySelector('#pp-users-next').onclick=()=>{offset+=30;run(loadUsers);};
document.querySelector('#pp-pay-filter').onsubmit=e=>{e.preventDefault();paymentOffset=0;run(loadPayments);};document.querySelector('#pp-pay-prev').onclick=()=>{paymentOffset=Math.max(0,paymentOffset-50);run(loadPayments);};document.querySelector('#pp-pay-next').onclick=()=>{paymentOffset+=50;run(loadPayments);};
document.querySelector('#pp-user-list').onclick=e=>{const b=e.target.closest('[data-manage]');if(b)run(()=>openUser(b.dataset.manage),b);};
async function voidPayment(id){const reason=prompt('Motivul anulării (minimum 3 caractere). Înregistrarea va rămâne în audit:');if(reason===null)return;await api('prep_admin_void_payment',{p_id:id,p_reason:reason});if(dialog.open)await openUser(detailId);else await loadMoney();}
document.querySelector('#pp-payment-list').onclick=e=>{const b=e.target.closest('[data-void]');if(b)run(()=>voidPayment(b.dataset.void),b);};
dialog.addEventListener('click',e=>{const r=e.target.closest('[data-revoke]'),v=e.target.closest('[data-void]');if(r&&confirm('Retragi accesul la '+names[r.dataset.revoke]+'? Progresul și istoricul vor fi păstrate.'))run(async()=>{await api('prep_admin_set_exam',{p_user_id:detailId,p_exam_key:r.dataset.revoke,p_grant:false});await afterMutation();},r);if(v)run(()=>voidPayment(v.dataset.void),v);});
dialog.addEventListener('submit',e=>{e.preventDefault();const f=e.target,d=formData(f),id=detailId;run(async()=>{
 if(f.dataset.progress)await api('prep_admin_set_progress',{p_user_id:id,p_exam_key:f.dataset.progress,p_question_floor:Number(d.questions),p_course_floor:Number(d.courses),p_reason:d.reason});
 else if(f.id==='pp-payment-add')await api('prep_admin_add_payment_mdl',{p_id:f.dataset.paymentId,p_user_id:id,p_exam_key:d.exam||null,p_amount_mdl:Number(d.amount),p_paid_on:d.paid_on,p_note:d.note});
 await afterMutation();},e.submitter);});
function clearPortal(){generation++;uid=null;admin=false;rolePromise=null;window.PrepPortal.adjustments={};clearInterval(heartbeat);heartbeat=null;lastPing=0;document.querySelector('#admin-btn').hidden=true;destroyChart();if(dialog.open)dialog.close();if(saleDialog.open)saleDialog.close();overview=null;history=[];detailId=null;['pp-overview','pp-user-list','pp-payment-list','pp-money-summary','pp-money-chart','pp-history-list','pp-history-summary'].forEach(id=>document.getElementById(id).textContent='');}
function paintAccountChrome(){document.querySelectorAll('.pp-account-name').forEach(n=>n.textContent=currentUserName||currentUserEmail||'Contul meu');document.querySelectorAll('.pp-brand-actions .avatar').forEach(n=>{const original=document.querySelector('#profile-btn-avatar');if(original){n.style.backgroundImage=original.style.backgroundImage;n.textContent=original.textContent;}});}
document.querySelectorAll('[data-pp-history]').forEach(b=>b.onclick=()=>document.querySelector('#history-btn').click());
document.querySelectorAll('[data-pp-guide]').forEach(b=>b.onclick=()=>document.querySelector('#guide-btn').click());
document.querySelectorAll('[data-pp-profile]').forEach(b=>b.onclick=()=>document.querySelector('#profile-btn').click());
document.querySelectorAll('[data-pp-logout]').forEach(b=>b.onclick=()=>document.querySelector('#logout-btn').click());
document.querySelector('#pp-history-list').addEventListener('click',e=>{if(e.target.closest('[data-pp-continue]'))document.querySelector('[data-pp-back]').click();});
const saleDialog=document.createElement('dialog');saleDialog.className='pp-dialog pp-sale-dialog';saleDialog.setAttribute('aria-labelledby','pp-sale-title');saleDialog.id='pp-sale';document.body.appendChild(saleDialog);
function openSale(){if(!admin)return;const nonce=crypto.randomUUID();saleDialog.innerHTML=`<div class="pp-sale-heading"><span class="pp-sale-symbol">${icons.plus}</span><button class="pp-close-icon" type="button" data-sale-close aria-label="Închide">×</button></div><p class="pp-eyebrow">ÎNCASĂRI ȘI ACCES</p><h2 id="pp-sale-title">Vânzare manuală</h2><p class="pp-muted">Alege utilizatorul, examenele și suma totală a vânzării.</p><form id="pp-new-sale" data-sale-id="${nonce}"><div class="pp-sale-fields"><label><span><b>01</b> Utilizator</span><input name="login" autocomplete="off" autofocus required maxlength="254" placeholder="nume sau email@exemplu.com"><small>Contul trebuie să existe deja pe prep.</small></label><fieldset class="pp-multi-field"><legend><b>02</b> Examene</legend>${examPicker()}</fieldset><label><span><b>03</b> Suma totală încasată</span><div class="pp-amount-field"><input name="amount" type="number" min="0.01" max="999999999.99" step="0.01" placeholder="0.00" required></div></label><label><span><b>04</b> Moneda</span><select name="currency" required><option value="MDL">MDL — lei moldovenești</option><option value="EUR">EUR — euro</option></select></label></div><details class="pp-sale-extra"><summary>Data plății și detalii suplimentare</summary><div class="pp-form"><label>Data<input name="paid_on" type="date" value="${day()}" max="${day()}" min="2010-01-01" required></label><label>Notă (opțional)<input name="note" maxlength="500" placeholder="Referință plată"></label></div></details><p class="pp-muted">Accesul la examenele selectate se acordă împreună cu vânzarea.</p><p id="pp-sale-status" role="status" aria-live="polite" class="pp-status" hidden></p><div class="pp-sale-buttons"><button class="btn btn-secondary" type="button" data-sale-close>Anulează</button><button class="btn btn-primary" type="submit">Salvează vânzarea <span aria-hidden="true">→</span></button></div><p class="pp-sale-disclaimer">Înregistrare manuală.</p></form>`;saleDialog.dataset.saving='false';saleDialog.showModal();saleDialog.querySelectorAll('[data-sale-close]').forEach(b=>b.onclick=()=>saleDialog.close());}
document.addEventListener('click',e=>{const all=e.target.closest('[data-exams-all]'),none=e.target.closest('[data-exams-none]');if(all||none)(all||none).closest('fieldset').querySelectorAll('input[name=exams]:not(:disabled)').forEach(n=>n.checked=!!all);});
document.querySelectorAll('[data-new-sale]').forEach(b=>b.onclick=openSale);
saleDialog.addEventListener('submit',async e=>{e.preventDefault();const f=e.target,d=formData(f),exams=selectedExams(f),button=e.submitter,status=saleDialog.querySelector('#pp-sale-status');status.hidden=false;if(!exams.length){status.textContent='Selectează cel puțin un examen.';status.classList.add('pp-error');return;}button.disabled=true;status.classList.remove('pp-error');status.textContent='Se salvează vânzarea…';saleDialog.dataset.saving='true';const requestUid=uid;saleDialog.querySelectorAll('input,select,button').forEach(n=>n.disabled=true);let saved=false;try{
 const result=await api('prep_admin_new_sale_currency',{p_id:f.dataset.saleId,p_login:d.login.trim(),p_exam_keys:exams,p_amount:Number(d.amount),p_currency:d.currency,p_paid_on:d.paid_on,p_note:d.note||''});saved=true;if(uid!==requestUid)return;
 saleDialog.dataset.saving='false';
 saleDialog.innerHTML=`<div class="pp-sale-heading"><span class="pp-sale-symbol pp-sale-complete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg></span><button class="pp-close-icon" type="button" data-sale-done aria-label="Închide">×</button></div><p class="pp-eyebrow">TOTUL ESTE SALVAT</p><h2 id="pp-sale-title">Vânzare înregistrată</h2><div id="pp-sale-status" role="status" class="pp-sale-receipt"><strong>${esc(result.email)}</strong><p>${esc(exams.map(k=>names[k]).join(', '))}</p><span class="pp-receipt-total">${esc(fmt(d.amount,d.currency))}</span><p>${result.access_granted?'Accesul la toate examenele selectate este activ.':'Vânzarea este înregistrată, dar accesul nu este activ.'}</p></div><div class="pp-sale-buttons"><button class="btn btn-primary" type="button" data-sale-done>Gata</button></div>`;
 saleDialog.scrollTop=0;saleDialog.querySelectorAll('[data-sale-done]').forEach(b=>b.onclick=()=>saleDialog.close());
 try{await refreshOwnAccess();await ({overview:loadOverview,users:loadUsers,money:loadMoney,messages:loadMessages}[tab])();}catch(refreshError){message('Vânzarea este salvată. Apasă Actualizează datele pentru reîncărcarea statisticilor.',true);}
 }catch(er){status.textContent=er.message;status.classList.add('pp-error');}finally{saleDialog.dataset.saving='false';if(!saved)saleDialog.querySelectorAll('input,select,button').forEach(n=>n.disabled=false);}});
saleDialog.addEventListener('cancel',e=>{if(saleDialog.dataset.saving==='true')e.preventDefault();});

/* ---------- mesaje către utilizatori ---------- */
const msgTemplates=[
 {n:'Mulțumim că ești cu noi',t:'Mulțumim că ești cu noi',b:'Mulțumim că te pregătești pe Prep. Dacă ai întrebări, ne poți scrie oricând pe Telegram.'},
 {n:'Reamintire: exersează azi',t:'Nu uita să exersezi azi',b:'Chiar și 15 minute pe zi fac diferența. Intră pe Prep. și continuă de unde ai rămas.'},
 {n:'Accesul tău este activ',t:'Accesul tău este activ',b:'Poți începe pregătirea. Începe cu primul video din curs, apoi exersează întrebările. Spor la învățat!'},
 {n:'Felicitări pentru progres',t:'Felicitări pentru progres',b:'Progresul tău este remarcabil. Continuă tot așa, te apropii de examen.'},
 {n:'Ești gata de examen',t:'Ești gata de examen',b:'Te vedem pregătit. Poți programa examenul oficial Certiport. Scrie-ne pe Telegram dacă ai nevoie de ajutor.'},
 {n:'Materiale noi',t:'Am adăugat materiale noi',b:'Am adăugat întrebări și lecții noi. Intră și verifică modulele tale.'}
];
const tplOptions=()=>'<option value="">Scriu eu mesajul</option>'+msgTemplates.map((m,i)=>`<option value="${i}">${esc(m.n)}</option>`).join('');
function userMsgPanel(){return `<div class="pp-panel"><h2>Trimite un mesaj</h2><p class="pp-muted">Utilizatorul îl vede în clopoțel, la Mesaje.</p><form id="pp-user-msg" class="pp-form"><label>Șablon<select name="tpl">${tplOptions()}</select></label><label>Titlu<input name="title" maxlength="120" required></label><label>Mesaj<textarea name="body" rows="3" maxlength="600" required></textarea></label><button class="btn btn-primary">Trimite mesajul</button></form></div>`;}
async function loadMessages(){
 const form=document.querySelector('#pp-msg-form');if(form&&!form.tpl.options.length)form.tpl.innerHTML=tplOptions();
 const rows=await api('prep_admin_sent_messages',{p_limit:30});if(!admin)return;
 document.querySelector('#pp-msg-sent').innerHTML=rows.length?`<div class="pp-table-wrap"><table class="pp-table"><thead><tr><th>Data</th><th>Mesaj</th><th>Destinatari</th><th>Citit</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(date(r.created_at))}</td><td><strong>${esc(r.title)}</strong><br><span class="pp-muted">${esc(r.body)}</span></td><td>${r.recipients}</td><td>${r.read_count} / ${r.recipients}</td></tr>`).join('')}</tbody></table></div>`:'<p class="pp-muted">Nu ai trimis încă niciun mesaj.</p>';
}
document.addEventListener('change',e=>{
 const f=e.target.closest('#pp-msg-form,#pp-user-msg');if(!f)return;
 if(e.target.name==='aud')document.querySelector('#pp-msg-email').hidden=e.target.value!=='email';
 if(e.target.name==='tpl'){const m=msgTemplates[e.target.value];if(m){f.title.value=m.t;f.body.value=m.b;}}
});
document.querySelector('#pp-msg-form').addEventListener('submit',e=>{
 e.preventDefault();const f=e.target,d=formData(f),st=document.querySelector('#pp-msg-status');
 const who={all:'TOȚI utilizatorii',active:'toți utilizatorii cu acces activ',email:d.email};
 if(d.aud==='email'&&!d.email){st.textContent='Scrie emailul contului.';st.hidden=false;st.classList.add('pp-error');return;}
 if(!confirm('Trimiți mesajul către '+who[d.aud]+'?'))return;
 run(async()=>{st.hidden=false;st.classList.remove('pp-error');st.textContent='Se trimite…';
  try{const r=await api('prep_admin_send_message',{p_audience:d.aud,p_title:d.title,p_body:d.body,p_email:d.aud==='email'?d.email:null});
   st.textContent=`Mesaj trimis către ${r.sent} ${r.sent===1?'utilizator':'utilizatori'}.`;f.title.value='';f.body.value='';f.tpl.value='';await loadMessages();
  }catch(er){st.textContent=er.message;st.classList.add('pp-error');}},e.submitter);
});
dialog.addEventListener('submit',e=>{
 const f=e.target;if(f.id!=='pp-user-msg')return;
 e.preventDefault();e.stopImmediatePropagation();const d=formData(f),id=detailId;
 run(async()=>{const s=dialog.querySelector('#pp-detail-status');
  try{await api('prep_admin_send_message',{p_audience:'users',p_title:d.title,p_body:d.body,p_user_ids:[id]});
   s.textContent='Mesajul a fost trimis.';s.hidden=false;s.classList.remove('pp-error');f.title.value='';f.body.value='';f.tpl.value='';
  }catch(er){s.textContent=er.message;s.hidden=false;s.classList.add('pp-error');}},e.submitter);
},true);
document.querySelector('#logout-btn').addEventListener('click',clearPortal);
sb.auth.onAuthStateChange(event=>{if(event==='SIGNED_OUT'){clearPortal();showScreen('screen-login');}});
window.addEventListener('online',()=>syncTests());document.addEventListener('visibilitychange',()=>{if(!document.hidden&&uid){ping();syncTests();}});
if(document.querySelector('#screen-dashboard').classList.contains('active'))initPortal();
})();
