window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.html5 = {
  "id": "html5",
  "name": "HTML5 Application Development",
  "shortLabel": "WEB",
  "accent": "#E86A33",
  "description": "Practice questions for HTML5, CSS, JavaScript, browser APIs and application lifecycle management. Unofficial preparation material.",
  "CHAPTERS": [
    {
      "id": "html-forms",
      "name": "HTML and Forms"
    },
    {
      "id": "css-layout",
      "name": "CSS Layout and Responsive Design"
    },
    {
      "id": "css-effects",
      "name": "CSS Effects and Animation"
    },
    {
      "id": "javascript",
      "name": "JavaScript and Events"
    },
    {
      "id": "graphics",
      "name": "Canvas and SVG"
    },
    {
      "id": "browser-apis",
      "name": "Browser APIs and Data"
    },
    {
      "id": "lifecycle",
      "name": "Application Lifecycle Management"
    }
  ],
  "QUESTIONS": [
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "What is the final color effect of this filter chain?",
      "options": [
        "Mostly sepia with no gray",
        "Mostly sepia with some gray",
        "Completely grayscale",
        "Mostly gray with some sepia"
      ],
      "correct": 2,
      "explanation": "Filters run from left to right: sepia(75%) first adds a partial brown tint, then grayscale(100%) converts that intermediate result completely to shades of gray. The last operation removes the remaining chromatic information, including the sepia tint. Consequently none of the three answers describing residual sepia is possible; the relative percentages do not compete as weights or average together.",
      "code": ".imgfilter { filter: sepia(75%) grayscale(100%); }",
      "id": "web-001"
    },
    {
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match each HTML element to its purpose.",
      "dragItems": [
        {
          "id": "i1",
          "text": "output"
        },
        {
          "id": "i2",
          "text": "legend"
        },
        {
          "id": "i3",
          "text": "fieldset"
        },
        {
          "id": "i4",
          "text": "datalist"
        },
        {
          "id": "i5",
          "text": "meter"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Supplies suggested autocomplete values",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Groups related form controls",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Represents a scalar measurement in a known range",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Provides a caption for a fieldset",
          "correctItemId": "i2"
        },
        {
          "id": "z5",
          "label": "Displays a calculation result",
          "correctItemId": "i1"
        }
      ],
      "explanation": "datalist supplies suggested values for an input whose list attribute references it; it is not a restrictive select menu. fieldset groups related controls, while its legend provides the group caption. meter represents a scalar measurement within a known range, rather than task completion. output represents the result of a calculation or user action. These semantic roles distinguish suggestions, grouping, captioning, measurement, and results rather than merely changing how text looks.",
      "id": "web-002"
    },
    {
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Complete the class definition and instantiation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "constructor"
        },
        {
          "id": "i2",
          "text": "new"
        },
        {
          "id": "i3",
          "text": "initiator"
        },
        {
          "id": "i4",
          "text": "initialize"
        },
        {
          "id": "i5",
          "text": "class"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Blank [1] is constructor, the special class method invoked when an instance is created. Blank [2] is new, which allocates the instance and invokes Total with amount 1500 and salesTax 0.075. Accessing myTotal.total would call calculation(), producing 1500 × 1.075 = 1612.5. initialize and initiator would only be ordinary method names, not automatic initialization hooks. class declares a class and cannot replace the instantiation operator.",
      "code": "class Total {\n  [1](amount, salesTax) {\n    this.amount = amount;\n    this.salesTax = salesTax;\n  }\n  get total() { return this.calculation(); }\n  calculation() { return this.amount * (1 + this.salesTax); }\n}\nlet myTotal = [2] Total(1500, 0.075);",
      "id": "web-003"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which units can the CSS saturate() filter accept? Choose two.",
      "options": [
        "Ems",
        "Percentages",
        "Unitless numbers",
        "Pixels"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "saturate() accepts a nonnegative number or percentage. The baseline is 1 or 100%; zero removes saturation, and values above the baseline increase it. Thus both unitless numbers and percentages are valid representations of the same kind of amount. em and px measure lengths, not saturation multipliers, so neither is accepted as the argument to this particular filter function.",
      "id": "web-004"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which two browser APIs store key-value data? Choose two.",
      "options": [
        "localStorage",
        "driveCache",
        "AppCache",
        "sessionStorage",
        "offlineStorage"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "localStorage and sessionStorage implement Web Storage as string-key/string-value stores, scoped to an origin. localStorage normally survives closing and reopening the browser; sessionStorage belongs to a particular page session, normally ending when its tab closes. Persistence can be restricted by browser policies. AppCache was a legacy manifest-based resource cache, not this key-value API, and is obsolete. driveCache and offlineStorage are not standard browser Web Storage interfaces.",
      "id": "web-005"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which web-font format can be loaded through CSS @font-face even when the font is not installed locally?",
      "options": [
        "font-family",
        "SVG element",
        "font-free",
        "WOFF"
      ],
      "correct": 3,
      "explanation": "WOFF is the Web Open Font Format. An @font-face src URL can fetch a WOFF file and associate it with a font-family name without requiring a locally installed copy, subject to loading and cross-origin rules. font-family selects a family but is not a file format. An SVG element is markup for graphics, not the listed downloadable font format. font-free is not a standard CSS font format or property.",
      "id": "web-006"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "What do JSON.parse() and JSON.stringify() do?",
      "options": [
        "Convert between JSON text and JavaScript values",
        "Send HTTP requests automatically",
        "Render browser graphics",
        "Perform server-side image processing"
      ],
      "correct": 0,
      "explanation": "JSON.parse reads valid JSON text and returns its corresponding JavaScript value, such as an object or array. JSON.stringify serializes a supported JavaScript value into JSON text; unsupported values and cycles have important limitations. Neither function communicates with a server by itself: fetch or XMLHttpRequest would perform that operation. They also do not draw graphics or process server-side images; they only convert data representations.",
      "id": "web-007"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which three methods belong to navigator.geolocation? Choose three.",
      "options": [
        "findLocation",
        "getLocation",
        "clearWatch",
        "watchPosition",
        "getCurrentPosition",
        "watchLocation"
      ],
      "correct": [
        2,
        3,
        4
      ],
      "explanation": "getCurrentPosition requests a single position result through callbacks. watchPosition registers callbacks for subsequent location updates and returns a watch identifier. clearWatch takes that identifier to stop the watch. findLocation, getLocation, and watchLocation are not methods of the standard Geolocation interface. In modern browsers geolocation generally requires a secure context, permission, and an allowed permissions policy; the method names alone do not bypass these requirements.",
      "id": "web-008"
    },
    {
      "chapter": "lifecycle",
      "type": "single",
      "question": "After planning a website, what is the next stage in this lifecycle: Plan, Design, Develop, Test, Deploy, Maintain?",
      "options": [
        "Design",
        "Plan",
        "Test",
        "Develop"
      ],
      "correct": 0,
      "explanation": "The sequence supplied by the question explicitly places Design immediately after Plan. Design turns the agreed requirements into layouts, navigation, interaction behavior, and architecture that development can implement. Plan is the stage already completed. Develop follows design, and Test follows development in this simplified sequence. Real projects can iterate between stages, but that does not change the next named stage in the stated model.",
      "id": "web-009"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which subject is especially useful for calculating movement and timing in JavaScript animations?",
      "options": [
        "English",
        "History",
        "Art",
        "Mathematics"
      ],
      "correct": 3,
      "explanation": "Mathematics is the directly relevant subject: animation updates use positions, elapsed time, speed, interpolation, and often angles or trigonometry. For example, a constant-speed movement computes distance as speed multiplied by elapsed time. Art can inform appearance and English can inform content, but neither substitutes for those movement calculations. History likewise is not the mathematical basis of timing and coordinate updates.",
      "id": "web-010"
    },
    {
      "chapter": "html-forms",
      "type": "multiple",
      "question": "Which two HTML5 elements represent a measurement and a calculation result? Choose two.",
      "options": [
        "meter",
        "autocomplete",
        "output",
        "autofocus",
        "mark"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "meter semantically represents a measurement within a known range, such as storage utilization. output represents a calculation or user-action result, such as a computed total. autocomplete controls suggestions or autofill behavior on supported controls, and autofocus requests initial focus; both are attributes, not the requested elements. mark is an element for highlighted relevance, not for a measured value or a computed result.",
      "id": "web-011"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which bare Boolean attribute makes an input mandatory before normal form submission?",
      "options": [
        "required",
        "None of these",
        "text/required",
        "required=\"true\""
      ],
      "correct": 0,
      "explanation": "required is a Boolean attribute: its presence enables the requirement, including when written without a value. For a supported input, ordinary interactive submission then fails validation if its value is missing. required=\"true\" is generally enabled by browsers too, but is not the conforming Boolean-attribute spelling and is not the bare form specifically requested. text/required is not an HTML attribute, so None of these is unnecessary. Validation can still be bypassed by novalidate or programmatic paths.",
      "id": "web-012"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "What does TouchEvent.targetTouches contain?",
      "options": [
        "No touch points",
        "A list of clickable screen areas",
        "Active touch points that started on the same target element",
        "Only touch points changed by the current event"
      ],
      "correct": 2,
      "explanation": "targetTouches is the list of still-active contact points whose touch-start target matches the target of this touch event. It can therefore contain multiple touches and can also be empty; it does not always contain no points. It does not describe clickable areas. changedTouches instead contains the contact points affected by the particular event, such as the contacts that have just ended, so it is not interchangeable with targetTouches.",
      "id": "web-013"
    },
    {
      "chapter": "lifecycle",
      "type": "multiple",
      "question": "In the legacy web-application state model, which three state scopes are commonly distinguished? Choose three.",
      "options": [
        "DataLink",
        "Persist (persistent)",
        "Application",
        "Transport",
        "Presentation",
        "Session"
      ],
      "correct": [
        1,
        2,
        5
      ],
      "explanation": "Application state is shared across users of an application, session state belongs to one user session, and persistent state survives transient sessions by being saved in durable storage. Those are the three conceptual scopes intended by this legacy application-state classification. DataLink, Transport, and Presentation are network-layer terms, not alternative application-state scopes. These names are not standardized HTML5 execution states, and the overlap of Application and Session with network terminology does not change their meaning here.",
      "id": "web-014"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "Where should canvas drawing instructions be placed when a button click must trigger the drawing?",
      "options": [
        "Inside a div tag as plain text",
        "Inside a style sheet",
        "Inside a JavaScript function called by the click handler",
        "Only as text in head"
      ],
      "correct": 2,
      "explanation": "Put the drawing commands in a JavaScript function invoked by the button click handler. That function can acquire the canvas 2D context and issue commands such as beginPath, arc, and stroke at the time of the click. Plain text inside a div or head is not executable drawing logic. A stylesheet changes presentation but does not execute the imperative canvas context methods. A script may be declared in head, but not merely as text.",
      "id": "web-015"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which CSS declaration rounds corners by 15 pixels?",
      "options": [
        "border-radius: 15px;",
        "border-roundness: 15px;",
        "border: radius15deg;",
        "border-radius: 15deg;"
      ],
      "correct": 0,
      "explanation": "border-radius: 15px sets the radius of the element’s corners using a valid CSS length. With one value, the same radius is applied to all four corners. border-roundness is not a CSS property. border: radius15deg is not a valid border shorthand value, and border-radius: 15deg uses an angle where a length or percentage is required. Rotation units do not express a corner radius.",
      "id": "web-016"
    },
    {
      "chapter": "javascript",
      "type": "true_false",
      "question": "True or False: In a browser that permits printing, the following function is valid JavaScript and has no inherent syntax error.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "True. The function declaration and window.print() call are valid browser JavaScript. Automatic semicolon insertion permits the missing semicolon before the closing brace, so that omission does not create a syntax error. Defining the function does not print immediately; calling printPage invokes the browser’s printing operation. Printing may be restricted by browser policy, but the question explicitly assumes it is permitted. False would incorrectly treat the optional semicolon as mandatory.",
      "code": "function printPage() {\n  window.print()\n}",
      "id": "web-017"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two length units directly size an element relative to viewport width or height? Choose two.",
      "options": [
        "px",
        "vw",
        "vh",
        "cm"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "vw and vh are viewport-percentage length units: 1vw corresponds to one percent of viewport width, and 1vh to one percent of viewport height under the applicable viewport definition. Thus 100vw and 100vh express full viewport dimensions. px is a CSS reference pixel and cm is an absolute length unit, not a fraction of a viewport dimension. Mobile browser chrome can affect which viewport size is relevant; newer svh, lvh, and dvh distinguish those cases.",
      "id": "web-018"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "What is jQuery?",
      "options": [
        "A lightweight JavaScript library",
        "A database query language",
        "A Java-based query language",
        "A vector-graphics format"
      ],
      "correct": 0,
      "explanation": "jQuery is a JavaScript library providing utilities for DOM selection and manipulation, event handling, Ajax, and effects. It is used by JavaScript code rather than being a separate browser language. A database query language, such as SQL, queries stored records; that is not what jQuery is. Java and JavaScript are distinct languages despite their names. SVG is a vector-graphics format; jQuery is not one.",
      "id": "web-019"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which flex-item property changes its visual order relative to siblings?",
      "options": [
        "flex-grow",
        "order",
        "flex-basis",
        "flex"
      ],
      "correct": 1,
      "explanation": "order determines the order-modified visual position of a flex item among its siblings. Items with smaller order values are laid out first, and equal values retain document order. flex-grow instead distributes positive free space, flex-basis establishes the starting main size, and flex combines grow, shrink, and basis. None of those directly specifies item order. Changing order does not rewrite the DOM or inherently change keyboard and assistive-technology reading order.",
      "id": "web-020"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which anchor-element property suggests that its linked resource should be downloaded?",
      "options": [
        "Blob",
        "href",
        "download",
        "createObjectURL"
      ],
      "correct": 2,
      "explanation": "The anchor download attribute, reflected by its download property, requests download behavior and can suggest a filename. href is still needed to identify the resource but does not by itself request a download. Blob represents binary data, and URL.createObjectURL can produce a URL for a Blob; neither is the anchor property being asked for. Browsers can restrict download behavior, notably for cross-origin resources, so it is a suggestion rather than an unconditional guarantee.",
      "id": "web-021"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "What does flex-flow combine?",
      "options": [
        "Only wrapping",
        "flex-direction and flex-wrap",
        "Only vertical alignment",
        "CSS Grid configuration"
      ],
      "correct": 1,
      "explanation": "flex-flow is the shorthand for flex-direction and flex-wrap. For example, flex-flow: row wrap selects a horizontal main axis and permits multiple flex lines. It therefore does more than wrapping alone. Vertical or cross-axis alignment is controlled by alignment properties rather than this shorthand, and CSS Grid uses a different layout model and properties. Leaving out one component resets that component to its initial value.",
      "id": "web-022"
    },
    {
      "chapter": "graphics",
      "type": "multiple",
      "question": "Which two statements about SVG are accurate? Choose two.",
      "options": [
        "SVG cannot be embedded inline",
        "SVG is an XML-based vector format",
        "SVG can never be animated",
        "SVG can be animated",
        "SVG must be written in JavaScript"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "SVG is an XML-based language for scalable vector graphics, and its elements can be animated through facilities such as SVG animation elements, CSS, or JavaScript. SVG can be embedded inline in HTML, so the claim that it cannot be inline is false. It need not be written in JavaScript: declarative SVG markup is sufficient. The claim that it can never be animated directly contradicts these supported animation mechanisms.",
      "id": "web-023"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which declaration creates a block-level grid container?",
      "options": [
        "display: grid;",
        "grid: true;",
        "display: flex-grid;",
        "show: grid;"
      ],
      "correct": 0,
      "explanation": "display: grid establishes a grid formatting context with a block-level outer display type. Its children can then be laid out using grid tracks, lines, and placement rules. grid: true is not a valid way to enable Grid, display: flex-grid is not a valid display keyword, and show is not the CSS property for selecting a layout model. display: inline-grid would instead provide an inline-level outer box, but is not the choice shown.",
      "id": "web-024"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which three are standard touch event names? Choose three.",
      "options": [
        "touchstart",
        "touchend",
        "touchstop",
        "touchmove",
        "touchdrag",
        "touchgo"
      ],
      "correct": [
        0,
        1,
        3
      ],
      "explanation": "touchstart is dispatched when contact begins, touchmove when an active contact moves, and touchend when contact ends. touchstop, touchdrag, and touchgo are not standard Touch Events event names. There is also touchcancel for interrupted contacts, but it is not among these choices. Pointer Events provide another input model; their existence does not make the listed touch event names interchangeable or remove their case sensitivity.",
      "id": "web-025"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "With default 2D canvas axes, which direction does a negative angle passed to rotate() rotate the coordinate system?",
      "options": [
        "Counterclockwise",
        "It always throws",
        "It mirrors the drawing",
        "Clockwise"
      ],
      "correct": 0,
      "explanation": "A negative angle rotates the canvas coordinate system counterclockwise under the default axes, whose x direction is rightward and y direction is downward. A positive angle therefore appears clockwise. rotate takes radians and composes a rotation with the current transform; a negative value is valid and does not inherently throw. Rotation changes orientation rather than reflecting or mirroring the image. Prior transforms could change the visual interpretation, which is why the default-axis qualification matters.",
      "id": "web-026"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which HTML identifier must be unique within a document?",
      "options": [
        "id",
        "Pseudo-class",
        "Tag name",
        "Class name"
      ],
      "correct": 0,
      "explanation": "An id value is required to be unique within its document tree, so it can identify a particular element for fragment links, labels, scripts, and selectors. Multiple elements may have the same tag name or class name, since those represent categories rather than unique identities. A pseudo-class is a selector describing a state or condition, not an element identifier. Browsers may tolerate duplicate IDs, but tolerance does not make such markup conforming.",
      "id": "web-027"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "What normally establishes the containing block for position: absolute?",
      "options": [
        "The nearest ancestor that establishes an absolute-positioning containing block",
        "Always the physical monitor",
        "Always the immediate parent",
        "Always the viewport"
      ],
      "correct": 0,
      "explanation": "An absolutely positioned element uses the nearest ancestor that establishes an absolute-positioning containing block. A non-static positioned ancestor commonly does this; transforms and certain containment-related properties can also do so. The immediate parent need not qualify, so always the immediate parent is false. The monitor is not a CSS containing block. If no ancestor qualifies, the initial containing block is used, but that fallback does not make every absolute element viewport-relative.",
      "id": "web-028"
    },
    {
      "chapter": "javascript",
      "type": "drag_drop",
      "question": "Match each event-propagation phase to its direction.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Bubbling"
        },
        {
          "id": "i2",
          "text": "Capturing"
        },
        {
          "id": "i3",
          "text": "Default action"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "From target outward through ancestors",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "From ancestors inward toward the target",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Capturing proceeds from outer ancestors inward toward the event target. Bubbling proceeds from the target outward through ancestors for events that bubble. The target phase sits between those propagation phases. Default action is a browser behavior associated with an event, such as navigation after an anchor activation, not a direction of propagation, so it is unused. stopPropagation affects propagation whereas preventDefault requests cancellation of a cancelable default action.",
      "id": "web-029"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the code to stroke a full circle centered at (200,150), radius 100.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ctx.arc(200, 150, 100, 0, 2 * Math.PI);"
        },
        {
          "id": "i2",
          "text": "ctx.circle(200, 150, 100);"
        },
        {
          "id": "i3",
          "text": "ctx.stroke();"
        },
        {
          "id": "i4",
          "text": "ctx.fill();"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Blank [1] is ctx.arc(200, 150, 100, 0, 2 * Math.PI), specifying center x=200, y=150, radius 100, and a complete 2π-radian sweep. beginPath starts a fresh path. Blank [2] is ctx.stroke(), which paints its outline. ctx.fill() would paint the interior rather than satisfy the requested outline. The standard 2D canvas context has no circle() method; circles are constructed with arc or equivalent path operations.",
      "code": "const ctx = document.getElementById(\"Canvas1\").getContext(\"2d\");\nctx.beginPath();\n[1]\n[2]",
      "id": "web-030"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Inline SVG avoids a separate HTTP request for that SVG markup.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Inline SVG markup has its own independently cacheable HTTP response.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "An SVG document loaded via img can be styled internally by the embedding page’s external stylesheet.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "The first statement is Yes: inline SVG markup travels in the HTML response, so no separate request is needed for that markup. The second is No: that markup has no separate HTTP response or independently reusable response cache entry, although the whole HTML document can be cached. The third is No: an SVG loaded through img is an isolated image resource; selectors in the embedding page do not reach its internal shapes. External resources referenced by inline SVG can still require requests.",
      "id": "web-031"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the SVG circle attributes.",
      "dragItems": [
        {
          "id": "i1",
          "text": "cx"
        },
        {
          "id": "i2",
          "text": "cy"
        },
        {
          "id": "i3",
          "text": "r"
        },
        {
          "id": "i4",
          "text": "stroke"
        },
        {
          "id": "i5",
          "text": "stroke-width"
        },
        {
          "id": "i6",
          "text": "fill"
        },
        {
          "id": "i7",
          "text": "rx"
        },
        {
          "id": "i8",
          "text": "background-color"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Horizontal center",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Vertical center",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Radius",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Outline color",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Outline thickness",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Interior color",
          "correctItemId": "i6"
        }
      ],
      "explanation": "cx sets the horizontal center to 50 and cy the vertical center to 70. r supplies the circle radius, 30. stroke selects the black outline and stroke-width gives its thickness, 3 user units. fill supplies the red interior. rx is a horizontal radius used on shapes such as ellipse and rounded rect, not the circle radius attribute here. background-color does not replace the SVG fill paint for the circle’s interior.",
      "code": "<svg width=\"150\" height=\"120\">\n  <circle [1]=\"50\" [2]=\"70\" [3]=\"30\" [4]=\"black\" [5]=\"3\" [6]=\"red\" />\n</svg>",
      "id": "web-032"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete the shadow: 2px to the right, 3px upward, 5px blur, blue.",
      "dragItems": [
        {
          "id": "i1",
          "text": "2px"
        },
        {
          "id": "i2",
          "text": "-3px"
        },
        {
          "id": "i3",
          "text": "3px"
        },
        {
          "id": "i4",
          "text": "5px"
        },
        {
          "id": "i5",
          "text": "-2px"
        },
        {
          "id": "i6",
          "text": "-5px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Horizontal offset",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Vertical offset",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Blur radius",
          "correctItemId": "i4"
        }
      ],
      "explanation": "The blanks produce box-shadow: 2px -3px 5px #0000ff. The first length is horizontal offset, so positive 2px moves right. The second is vertical offset, so -3px moves upward. The third is the nonnegative blur radius, 5px. Positive 3px would move downward, -2px would move left if used as the horizontal offset, and -5px cannot be a blur radius. The color is already supplied as blue.",
      "code": "div { box-shadow: [1] [2] [3] #0000ff; }",
      "id": "web-033"
    },
    {
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "Match each 2D transform to its purpose.",
      "dragItems": [
        {
          "id": "i1",
          "text": "skew"
        },
        {
          "id": "i2",
          "text": "scale"
        },
        {
          "id": "i3",
          "text": "matrix"
        },
        {
          "id": "i4",
          "text": "translate"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Moves an element",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Changes its size",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Represents a combined 2D affine transform",
          "correctItemId": "i3"
        }
      ],
      "explanation": "translate moves a rendered element along the axes, so it matches movement. scale changes the rendered size, so it matches resizing. matrix(a,b,c,d,e,f) supplies six coefficients for a combined 2D affine transform, allowing translation, scaling, rotation, or skew combinations. skew slants the axes and is the unused distractor. These transform operations affect rendering and do not generally reflow surrounding content as changing normal layout dimensions would.",
      "id": "web-034"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete the duration and keyframes keyword for this five-second bounce animation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "animation-duration"
        },
        {
          "id": "i2",
          "text": "animation-length"
        },
        {
          "id": "i3",
          "text": "animation-time"
        },
        {
          "id": "i4",
          "text": "keyframes"
        },
        {
          "id": "i5",
          "text": "keyframe"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Blank [1] is animation-duration, making one iteration last five seconds. Blank [2] is keyframes, forming @keyframes bounce to define the named sequence. animation-length and animation-time are not the relevant standard CSS properties, and singular @keyframe is not the valid at-rule. Relative positioning makes top offsets effective: the element moves between 0 and 100px at the specified stages. One iteration runs, and forwards retains the 100% frame afterward.",
      "code": "div {\n position: relative; animation-name: bounce;\n [1]: 5s; animation-iteration-count: 1; animation-fill-mode: forwards;\n}\n@[2] bounce {\n 0% { top: 0; } 25% { top: 100px; }\n 75% { top: 0; } 100% { top: 100px; }\n}",
      "id": "web-035"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete a blue drop shadow offset 5px right and 2px down, with 3px blur.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter"
        },
        {
          "id": "i2",
          "text": "drop-shadow"
        },
        {
          "id": "i3",
          "text": "5px"
        },
        {
          "id": "i4",
          "text": "2px"
        },
        {
          "id": "i5",
          "text": "3px"
        },
        {
          "id": "i6",
          "text": "#0000FF"
        },
        {
          "id": "i7",
          "text": "-2px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "CSS property",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Filter function",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Horizontal offset",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Vertical offset",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Blur radius",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Color",
          "correctItemId": "i6"
        }
      ],
      "explanation": "The six blanks form filter: drop-shadow(5px 2px 3px #0000FF). filter is the property, drop-shadow the function, 5px the horizontal offset to the right, 2px the vertical offset downward, 3px the blur parameter, and #0000FF the blue color. The unused -2px would shift the shadow upward instead. This filter follows the rendered alpha shape rather than simply shadowing the rectangular CSS box; its syntax has no spread-radius argument.",
      "code": ".buzz { [1]: [2]([3] [4] [5] [6]); }",
      "id": "web-036"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete the input type and maximum character count.",
      "dragItems": [
        {
          "id": "i1",
          "text": "tel"
        },
        {
          "id": "i2",
          "text": "phone"
        },
        {
          "id": "i3",
          "text": "telephone"
        },
        {
          "id": "i4",
          "text": "maxlength"
        },
        {
          "id": "i5",
          "text": "maxsize"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "tel is the standard input type for telephone numbers. It can prompt a telephone-oriented mobile keyboard, but imposes no universal phone-number syntax by itself. maxlength limits the number of characters entered to 13 for this textual control; it is not a numeric upper bound. phone and telephone are not standardized input type keywords and fall back to text behavior. maxsize is not the standard character-limit attribute.",
      "code": "<input type=\"[1]\" id=\"hphone\" name=\"hphone\" [2]=\"13\">",
      "id": "web-037"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Two floated elements can appear on the same line when space permits.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "float has no effect on an absolutely positioned element.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Every absolutely positioned element is positioned relative to the viewport.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "The first statement is Yes because floats can be placed next to one another if the containing block has enough horizontal room. The second is Yes because float does not apply to absolutely positioned elements; their placement follows positioning rules. The third is No: absolute positioning uses an established containing block, often a positioned ancestor, not invariably the viewport. Float layout and absolute positioning should therefore not be treated as equivalent ways of positioning against the screen.",
      "id": "web-038"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete a standard responsive viewport declaration.",
      "dragItems": [
        {
          "id": "i1",
          "text": "viewport"
        },
        {
          "id": "i2",
          "text": "scale"
        },
        {
          "id": "i3",
          "text": "media"
        },
        {
          "id": "i4",
          "text": "width=device-width"
        },
        {
          "id": "i5",
          "text": "width=screen-width"
        },
        {
          "id": "i6",
          "text": "initial-scale=1.0"
        },
        {
          "id": "i7",
          "text": "initial-scale=100"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i6"
        }
      ],
      "explanation": "The blanks are viewport, width=device-width, and initial-scale=1.0. The name identifies the viewport configuration, width=device-width requests a layout viewport matched to the device width in CSS pixels, and 1.0 means an initial scale of one. scale and media are not the required meta name here. screen-width is not the recognized width value, and initial-scale=100 means a scale factor of 100 rather than 100 percent. Responsive CSS is still needed to avoid content overflow.",
      "code": "<meta name=\"[1]\" content=\"[2], [3]\">",
      "id": "web-039"
    },
    {
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Q1 must not shrink. Q2 and Q3 have flex-grow:1. Give Q4 twice their growth factor. Use longhand declarations only; do not reset Q4’s flex-shrink or flex-basis.",
      "dragItems": [
        {
          "id": "i1",
          "text": "flex-grow: 2"
        },
        {
          "id": "i2",
          "text": "flex-grow: 200"
        },
        {
          "id": "i3",
          "text": "flex: 0"
        },
        {
          "id": "i4",
          "text": "flex: 2"
        },
        {
          "id": "i5",
          "text": "flex-shrink: none"
        },
        {
          "id": "i6",
          "text": "flex-shrink: 0"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Q1 declaration",
          "correctItemId": "i6"
        },
        {
          "id": "z2",
          "label": "Q4 declaration",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Use flex-shrink:0 for Q1: a zero shrink factor prevents negative-free-space shrinking, whereas none is not a valid factor. Use flex-grow:2 for Q4 to give it twice the growth factor of Q2 and Q3. flex-grow:200 would give it two hundred times their factor. flex:2 also sets grow to 2, but is excluded because it is a shorthand that resets shrink and basis. flex:0 is another excluded shorthand and does not express the requested no-shrink setting. Growth factors allocate extra space, not necessarily doubled final widths.",
      "id": "web-040"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete one property that starts at grid line 1 and spans three columns.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid-column"
        },
        {
          "id": "i2",
          "text": "grid"
        },
        {
          "id": "i3",
          "text": "grid-row"
        },
        {
          "id": "i4",
          "text": "1 / span 3"
        },
        {
          "id": "i5",
          "text": "1 / 2"
        },
        {
          "id": "i6",
          "text": "1 / col3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Property",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Value",
          "correctItemId": "i4"
        }
      ],
      "explanation": "grid-column: 1 / span 3 starts the item at column line 1 and spans three column tracks, ending at line 4 in a simple explicit grid. grid-row would control rows instead. grid is a different shorthand and does not accept this as a column-placement declaration. 1 / 2 spans only the track between lines 1 and 2; 1 / col3 refers to a named line, not an instruction to span three tracks.",
      "code": ".feature { [1]: [2]; }",
      "id": "web-041"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the shorthand for a 20px row gap and 10px column gap.",
      "dragItems": [
        {
          "id": "i1",
          "text": "gap"
        },
        {
          "id": "i2",
          "text": "grid-column-gap"
        },
        {
          "id": "i3",
          "text": "grid-row-gap"
        },
        {
          "id": "i4",
          "text": "20px 10px"
        },
        {
          "id": "i5",
          "text": "10px 20px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Property",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Value",
          "correctItemId": "i4"
        }
      ],
      "explanation": "gap: 20px 10px assigns the first value to row-gap and the second to column-gap. It therefore creates a 20px gap between rows and a 10px gap between columns. Reversing the values reverses those sizes. grid-row-gap and grid-column-gap are legacy longhand aliases that set only one corresponding dimension, not the requested two-value shorthand. gap works in supported Grid and Flex layouts, with layout-specific details.",
      "code": ".rowcolgap { [1]: [2]; }",
      "id": "web-042"
    },
    {
      "chapter": "browser-apis",
      "type": "dropdown",
      "question": "Complete the asynchronous request. The onload callback displays the text response.",
      "dragItems": [
        {
          "id": "i1",
          "text": "XMLHttpRequest"
        },
        {
          "id": "i2",
          "text": "HttpRequest"
        },
        {
          "id": "i3",
          "text": "open"
        },
        {
          "id": "i4",
          "text": "request"
        },
        {
          "id": "i5",
          "text": "GET"
        },
        {
          "id": "i6",
          "text": "POST"
        },
        {
          "id": "i7",
          "text": "send"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i7"
        }
      ],
      "explanation": "The blanks are XMLHttpRequest, open, GET, and send. Construct the request first, attach the load handler, configure a GET for news.txt with true for asynchronous operation, and call send() to start it. The handler writes responseText only for status 200. HttpRequest and request are not the required browser constructor and configuration method. POST is a real HTTP method but is not the intended retrieval method here. A load event can also accompany an HTTP error, which is why the status test matters.",
      "code": "function loadFile() {\n const xhttp = new [1]();\n xhttp.onload = () => {\n  if (xhttp.status === 200) document.getElementById(\"news\").textContent = xhttp.responseText;\n };\n xhttp.[2](\"[3]\", \"news.txt\", true);\n xhttp.[4]();\n}",
      "id": "web-043"
    },
    {
      "chapter": "browser-apis",
      "type": "drag_drop",
      "question": "Arrange the Google Chart setup steps by their dependencies. The required chart package must finish loading before the callback constructs the DataTable. In that callback, set the chart width to 120 times the completed data table’s getNumberOfColumns() result, along with its title and height. Drawing requires the prepared data and options. The DataTable does not exist before this callback.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Request the charts package and wait for its load callback"
        },
        {
          "id": "i2",
          "text": "Create the data table and set chart values"
        },
        {
          "id": "i3",
          "text": "Create title and height options; set width to data.getNumberOfColumns() * 120"
        },
        {
          "id": "i4",
          "text": "Reference https://www.gstatic.com/charts/loader.js"
        },
        {
          "id": "i5",
          "text": "Create a chart instance and call draw(data, options)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i5"
        }
      ],
      "explanation": "First reference loader.js so the loader API is available, then request the required package and wait for its callback. Construct and populate the DataTable inside that callback. Only then create the options, because their width expression calls data.getNumberOfColumns(); evaluating it earlier would access a table that does not yet exist. Finally create the chart instance and call draw(data,options), which needs the loaded package and both prepared arguments. The data-before-options order follows this exercise’s explicit computed-width dependency, not a general claim that all Google Charts programs must prepare options after data.",
      "id": "web-044"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which HTML version introduced standardized canvas, audio and video elements?",
      "options": [
        "HTML5",
        "HTML3",
        "HTML5.1 only",
        "V5 as a separate language"
      ],
      "correct": 0,
      "explanation": "HTML5 standardized canvas, audio, and video as part of HTML’s native application and media capabilities. They were not HTML3 features and were not first introduced only by HTML5.1. V5 is not a distinct language that supersedes HTML. Some implementations and proposals predated the final HTML5 recommendation, so introduced here refers to the HTML5 standardization generation rather than claiming all three appeared in browsers on one date. Modern HTML is maintained as a Living Standard.",
      "id": "web-045"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "Which SVG animation element can animate rotation of a square?",
      "options": [
        "animateTransform",
        "circle",
        "animateMotion",
        "path"
      ],
      "correct": 0,
      "explanation": "animateTransform with type=\"rotate\" animates the rotation transform of a target SVG element, such as a rect representing the square. circle and path are shape elements, not the appropriate animation element. animateMotion primarily moves an element along a motion path; it can orient an element along that path, but is not the direct transform-rotation mechanism requested here. Rotation values and an optional center determine the actual rotation behavior.",
      "id": "web-046"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two statements correctly describe media queries? Choose two.",
      "options": [
        "They apply CSS at selected viewport sizes or breakpoints",
        "They inherently guarantee faster page performance",
        "They primarily select specific browser brands",
        "They support responsive design"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Media queries conditionally apply CSS based on media characteristics such as viewport width, allowing breakpoint-specific layouts. This is a core technique in responsive design, so both those statements are correct. They do not primarily identify browser brands; feature tests and compatibility handling are different concerns. They also do not inherently guarantee faster performance: the resulting CSS, resources, and rendering workload determine that. Responsive behavior is a layout capability, not an automatic optimization claim.",
      "id": "web-047"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which two snippets define an object method? Assume Score: is inside an object literal and this refers to an instance. Choose two.",
      "options": [
        "Score: function() { /* ... */ }",
        "var a = Score();",
        "var funct = a;",
        "this.Score = function() { /* ... */ };"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Inside an object literal, Score: function() { ... } creates a property whose value is a function. Assigning this.Score = function() { ... } likewise places a function on the stated instance. Both therefore define methods in this question’s sense. var a = Score() invokes an existing function and stores its return value; it does not define a method. var funct = a merely copies a value into a variable and does not attach a callable property to an object.",
      "id": "web-048"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which two CSS filter declarations are valid? Choose two.",
      "options": [
        "filter: blur(25%);",
        "filter: box-shadow(16px 24px 24px green);",
        "filter: opacity(25%);",
        "filter: drop-shadow(16px 16px 16px red);"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "opacity(25%) accepts a percentage and makes the filtered result partially transparent. drop-shadow(16px 16px 16px red) supplies valid horizontal offset, vertical offset, blur, and color. blur(25%) is invalid because blur requires a length, not a percentage. box-shadow is a separate CSS property rather than a filter function, so placing box-shadow(...) inside filter is invalid even though similar numbers and a color would be useful in a box-shadow declaration.",
      "id": "web-049"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "What normally happens when float:right is applied to an image in a block formatting context?",
      "options": [
        "It moves right but text cannot flow beside it",
        "It floats to the right and inline content can wrap along its left side",
        "It floats left and text stays right",
        "It centers the image"
      ],
      "correct": 1,
      "explanation": "A right float is moved toward the right edge of its containing block, subject to available space and earlier floats. Inline content in the same relevant formatting context can flow on its left side. Thus the answer claiming text cannot flow beside it is wrong. float:right does not float the image left or center it. Floats are not the same as absolute positioning; their effect on the surrounding line boxes is central to this text-wrap behavior.",
      "id": "web-050"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete the markup for suggestions associated with the vehicle input.",
      "dragItems": [
        {
          "id": "i1",
          "text": "select"
        },
        {
          "id": "i2",
          "text": "input"
        },
        {
          "id": "i3",
          "text": "datalist"
        },
        {
          "id": "i4",
          "text": "vehicle"
        },
        {
          "id": "i5",
          "text": "vehicles"
        },
        {
          "id": "i6",
          "text": "value"
        },
        {
          "id": "i7",
          "text": "</select>"
        },
        {
          "id": "i8",
          "text": "</input>"
        },
        {
          "id": "i9",
          "text": "</datalist>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9"
        }
      ],
      "explanation": "The blanks are datalist, vehicles, and </datalist>. The input’s list=\"vehicles\" must reference the datalist id, not the input id vehicle. Its option values supply suggestions while allowing the user to enter another value. select would make a separate selection control rather than provide suggestions to this input. input is a void element and cannot wrap the options with an </input> closing tag. value names an option attribute, not the required element or matching list ID.",
      "code": "<input list=\"vehicles\" id=\"vehicle\">\n<[1] id=\"[2]\">\n <option value=\"Motorcycle\"><option value=\"Truck\">\n <option value=\"Boat\"><option value=\"Car\">\n[3]",
      "id": "web-051"
    },
    {
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Complete a click handler that directly calls process(), and the function declaration. Use an unlabelled invocation in the handler; do not add a javascript: label or prefix.",
      "dragItems": [
        {
          "id": "i1",
          "text": "onclick"
        },
        {
          "id": "i2",
          "text": "click"
        },
        {
          "id": "i3",
          "text": "process"
        },
        {
          "id": "i4",
          "text": "process()"
        },
        {
          "id": "i5",
          "text": "function process()"
        },
        {
          "id": "i6",
          "text": "javascript:process()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Choose onclick, process(), and function process(). onclick is the HTML handler attribute, while click alone is the event type used with addEventListener. process() invokes the function; process alone merely evaluates its reference. function process() introduces its declaration and the supplied braces form the body. javascript:process() can parse in handler JavaScript as a labelled statement, but the exercise explicitly excludes labels and prefixes. It is therefore not the requested direct invocation, rather than being rejected on the false claim that it can never execute.",
      "code": "<button [1]=\"[2]\">Process</button>\n<script>\n [3] { /* process data */ }\n</script>",
      "id": "web-052"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete the required five-digit postal code input.",
      "dragItems": [
        {
          "id": "i1",
          "text": "type"
        },
        {
          "id": "i2",
          "text": "name"
        },
        {
          "id": "i3",
          "text": "value"
        },
        {
          "id": "i4",
          "text": "pattern"
        },
        {
          "id": "i5",
          "text": "required"
        },
        {
          "id": "i6",
          "text": "maxlength"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Use type=\"text\", pattern=\"[0-9]{5}\", and required. Text preserves a leading zero in a postal identifier, while the pattern requires the entire nonempty value to consist of five ASCII digits. required also rejects an empty value, which pattern alone would allow. name identifies submitted data and value supplies an initial value; neither replaces type or validation. maxlength can cap length on a supported textual input but does not by itself require exactly five digits or forbid letters.",
      "code": "<input [1]=\"text\" id=\"post_code\" name=\"post_code\"\n [2]=\"[0-9]{5}\" title=\"5-digit postal code\" [3]>",
      "id": "web-053"
    },
    {
      "chapter": "browser-apis",
      "type": "dropdown",
      "question": "Complete the request construction, success check and JSON parsing.",
      "dragItems": [
        {
          "id": "i1",
          "text": "var xhr = new XMLHttpRequest();"
        },
        {
          "id": "i2",
          "text": "var xhr = xhr.responseXML;"
        },
        {
          "id": "i3",
          "text": "xhr.status === 200"
        },
        {
          "id": "i4",
          "text": "xhr.status === 404"
        },
        {
          "id": "i5",
          "text": "JSON.parse(xhr.responseText)"
        },
        {
          "id": "i6",
          "text": "xhr.responseXML"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Create xhr with new XMLHttpRequest(), test xhr.status === 200, and parse xhr.responseText with JSON.parse. The resulting menu array is mapped into strings containing Entree, Price, and Description, then joined with newline characters and assigned safely as text. A 404 means not found, not the intended success. responseXML is for a parsed XML document and cannot replace JSON parsing; assigning it to xhr would also destroy the request reference. Invalid JSON or a missing menu still requires error handling in production.",
      "code": "[1]\nxhr.onload = function() {\n if ([2]) {\n  const responseObject = [3];\n  const output = responseObject.menu.map(item =>\n   `${item.Entree}: ${item.Price} — ${item.Description}`).join(\"\\n\");\n  document.getElementById(\"content\").textContent = output;\n }\n};\nxhr.open(\"GET\", \"menu.json\", true);\nxhr.send();",
      "id": "web-054"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "An inline SVG contains <filter id=\"f2\"> with a blur primitive. Which CSS correctly references it?",
      "options": [
        "text { filter: url(\"#f2\"); }",
        "text { fill: blur; }",
        "text { filter: #blur; }",
        "text { filter: url(blur); }"
      ],
      "correct": 0,
      "explanation": "filter: url(\"#f2\") refers to the SVG filter resource whose id is f2 in the current document. That filter’s primitives determine the blur effect. fill controls interior paint rather than applying a blur, and blur is not a valid fill color. A bare #blur is not valid filter syntax. url(blur) names a resource URL called blur rather than the provided fragment f2, so it does not reference the stated filter.",
      "id": "web-055"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "student contains JSON text. Which code parses it and displays the student number?",
      "options": [
        "const data = JSON.parse(student); document.getElementById('screen').textContent = 'Student: ' + data.studentNum;",
        "const data = JSON.stringify(student); document.getElementByClassName('screen').innerHTML = data.studentNum;",
        "const data = JSON.parse(student); document.getElementById('screen').textContent = studentNum;",
        "document.getElementById('screen').textContent = student.studentNum;"
      ],
      "correct": 0,
      "explanation": "student is a string, so JSON.parse(student) first creates the object whose studentNum property is \"12345\". Selecting screen by getElementById and assigning textContent then displays Student: 12345. stringify serializes rather than parses and does not expose the student property; getElementByClassName is also not the standard method name. A bare studentNum variable is not declared. Reading student.studentNum directly does not parse the string and therefore cannot retrieve that JSON field.",
      "code": "const student = '{\"studentNum\":\"12345\",\"firstName\":\"John\",\"lastName\":\"Doe\",\"emailAddress\":\"jdoe@college.edu\"}';",
      "id": "web-056"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which overflow value makes overflowing text scrollable only when needed?",
      "options": [
        "overflow: scroll;",
        "overflow: visible;",
        "overflow: hidden;",
        "overflow: auto;"
      ],
      "correct": 3,
      "explanation": "overflow: auto provides scrolling when the content exceeds the available box. overflow: scroll establishes scrollable overflow even if content fits, conventionally reserving scrollbars, although overlay-scrollbar appearance varies by platform. visible lets overflow paint outside rather than creating the requested scrolling behavior. hidden clips overflowing content and offers no user scrollbars, even though programmatic scrolling may still be possible. The distinction is conditional user scrolling rather than simply whether content is clipped.",
      "id": "web-057"
    },
    {
      "chapter": "lifecycle",
      "type": "multiple",
      "question": "Which three tasks directly validate a released build during testing? Choose three.",
      "options": [
        "Plan a new marketing campaign",
        "Verify conformance to design specifications",
        "Check that application functionality works",
        "Find and report reproducible defects",
        "Publish the untested build",
        "Choose the initial project budget"
      ],
      "correct": [
        1,
        2,
        3
      ],
      "explanation": "Checking design-specification conformance, exercising application functionality, and finding reproducible defects all directly validate whether the build behaves as expected. Reproducible reports make failures actionable rather than merely asserting that something looks wrong. A marketing campaign and the initial budget are project or business planning tasks, not software validation. Publishing an untested build is deployment, not testing, and does not supply evidence that requirements have been met.",
      "id": "web-058"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which CSS property prevents an element from being placed alongside specified preceding floats?",
      "options": [
        "display",
        "position",
        "float",
        "clear"
      ],
      "correct": 3,
      "explanation": "clear specifies which sides of a block must avoid relevant preceding floats. For example, clear: both can force it below earlier left and right floats instead of alongside them. float creates floating placement rather than clearing it. display chooses the box/layout type, while position selects a positioning scheme; neither is the property specifically intended to request clearance from preceding floats. Clearance concerns floats, not every adjacent element or all positioned boxes.",
      "id": "web-059"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "Which path does this canvas call add?",
      "options": [
        "A full circle",
        "A straight line",
        "A semicircular arc",
        "A square"
      ],
      "correct": 2,
      "explanation": "arc adds a semicircular path because the endpoints differ by π radians, which is half of 2π. The final true argument requests the counterclockwise direction: under default canvas axes the arc from angle 0 to π passes above the center. It is neither a full circle nor a straight line or square. This call only changes the current path; stroke() or fill() is needed to paint it, and the visible result depends on those later operations.",
      "code": "ctx.arc(x, y, r, 0, Math.PI, true);",
      "id": "web-060"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which three event types can be handled on a suitably focusable/scrollable canvas element? Choose three.",
      "options": [
        "datareceived",
        "play",
        "blur",
        "mouseup",
        "scroll"
      ],
      "correct": [
        2,
        3,
        4
      ],
      "explanation": "blur is a focus event available when the canvas can receive and lose focus, mouseup is a mouse input event, and scroll can apply when the element is actually scrollable. These require the suitability qualifications in the question, not a claim that every bare canvas is scrollable or focusable. play is associated with media playback, not a native canvas behavior. datareceived is not a standard canvas event. Scripts can dispatch arbitrary custom event names, but that does not make them native event types.",
      "id": "web-061"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Require ten digits and show zeroes only as a hint, not as a stored default value.",
      "dragItems": [
        {
          "id": "i1",
          "text": "required"
        },
        {
          "id": "i2",
          "text": "pattern"
        },
        {
          "id": "i3",
          "text": "type"
        },
        {
          "id": "i4",
          "text": "placeholder"
        },
        {
          "id": "i5",
          "text": "value"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Validation attribute",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Hint attribute",
          "correctItemId": "i4"
        }
      ],
      "explanation": "pattern is the validation attribute: [0-9]{10} matches exactly ten ASCII digits across the entire value. required is already present, so an empty value is rejected too. placeholder supplies the zero-filled visual hint without setting a submitted default. Using value would populate the control with those zeroes and therefore violate the requirement that they be only a hint. type is already tel and does not enforce a universal phone format on its own.",
      "code": "<input id=\"phone\" name=\"phone\" type=\"tel\" required [1]=\"[0-9]{10}\" [2]=\"0000000000\">",
      "id": "web-062"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which three components define the origin that scopes localStorage? Choose three.",
      "options": [
        "User credentials",
        "Scheme",
        "Hostname",
        "Query string",
        "Port"
      ],
      "correct": [
        1,
        2,
        4
      ],
      "explanation": "The origin tuple consists of scheme, hostname, and port. For example, changing http to https or using a different non-equivalent port normally accesses a different localStorage area. The effective default port is normalized when determining origin. User credentials in a URL and the query string do not establish separate storage origins; paths do not either. Browser privacy partitioning and storage policies may add restrictions, but do not make those distractors components of the basic web-origin tuple.",
      "id": "web-063"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "const geo = navigator.geolocation. Which expression requests repeated position updates?",
      "options": [
        "geo.clearWatch(watchId)",
        "geo.getCurrentPosition(showLocation)",
        "geo.watchPosition(showLocation)",
        "geo = navigator.geolocation"
      ],
      "correct": 2,
      "explanation": "geo.watchPosition(showLocation) subscribes the callback to position updates and returns a watch ID. geo.getCurrentPosition(showLocation) requests one position rather than a continuing watch. geo.clearWatch(watchId) cancels an existing watch instead of starting one. Reassigning geo neither requests updates nor is valid for the stated const binding. Actual updates depend on permission, secure-context requirements, and position availability; registering the watch does not guarantee a fixed update frequency.",
      "id": "web-064"
    },
    {
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Match each CSS property to its corresponding example values.",
      "dragItems": [
        {
          "id": "i1",
          "text": "align-items"
        },
        {
          "id": "i2",
          "text": "direction"
        },
        {
          "id": "i3",
          "text": "display"
        },
        {
          "id": "i4",
          "text": "flex-direction"
        },
        {
          "id": "i5",
          "text": "order"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "flex or inline-flex",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "flex-start, flex-end or center",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A numeric flex-item order, for example 2",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "row, row-reverse, column or column-reverse",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "rtl or ltr",
          "correctItemId": "i2"
        }
      ],
      "explanation": "display takes flex or inline-flex to establish a flex container. align-items takes alignment values such as flex-start, flex-end, and center for the cross axis. order takes an integer such as 2 for order-modified layout. flex-direction chooses row, row-reverse, column, or column-reverse as the main-axis direction. direction takes rtl or ltr for writing direction, which can influence row layout but is not the same property as flex-direction. Each mapping therefore matches both the permitted value syntax and its distinct purpose.",
      "id": "web-065"
    },
    {
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Complete the subclass header and parent constructor call.",
      "dragItems": [
        {
          "id": "i1",
          "text": "class Pet extends Dog"
        },
        {
          "id": "i2",
          "text": "class Dog super Pet"
        },
        {
          "id": "i3",
          "text": "class Dog extends Pet"
        },
        {
          "id": "i4",
          "text": "Pet(name, breed);"
        },
        {
          "id": "i5",
          "text": "super(name, breed);"
        },
        {
          "id": "i6",
          "text": "Pet.constructor(name, breed);"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Use class Dog extends Pet for the subclass declaration, then super(name, breed) at the beginning of its constructor. super initializes the inherited name and breed before the derived constructor accesses this to assign price and gender. class Pet extends Dog reverses the relationship; super is not a replacement for extends in a class header. Calling Pet as a function is invalid for an ES class, and Pet.constructor is not the parent-instance initialization mechanism.",
      "code": "class Pet {\n constructor(name, breed) { this.name = name; this.breed = breed; }\n show() { return `${this.name}: ${this.breed}`; }\n}\n[1] {\n constructor(name, breed, price, gender) {\n  [2]\n  this.price = price; this.gender = gender;\n }\n}",
      "id": "web-066"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Choose the fieldset caption, slider and suggestion-list elements.",
      "dragItems": [
        {
          "id": "i1",
          "text": "legend"
        },
        {
          "id": "i2",
          "text": "h1"
        },
        {
          "id": "i3",
          "text": "label"
        },
        {
          "id": "i4",
          "text": "<input type=\"range\" id=\"donate\" value=\"15\" min=\"0\" max=\"50\">"
        },
        {
          "id": "i5",
          "text": "<meter id=\"donate\" value=\"15\" min=\"0\" max=\"50\"></meter>"
        },
        {
          "id": "i6",
          "text": "datalist"
        },
        {
          "id": "i7",
          "text": "option"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Fieldset caption element",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Interactive donation slider",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Element containing suggested amounts",
          "correctItemId": "i6"
        }
      ],
      "explanation": "legend captions the fieldset as a group; h1 is a heading and label captions an individual control rather than replacing the group legend. The range input is the interactive slider with initial value 15 and bounds 0–50; meter displays a measurement and is not an editable slider. datalist holds the suggested amounts and is connected by the input’s list=\"amounts\" and its matching id. option supplies an individual suggestion, not the container for all suggestions.",
      "code": "<fieldset>\n <[1]>Fundraising Campaign</[1]>\n <label for=\"donate\">Monthly Donations</label>\n [2]\n <label for=\"amount\">Choose your donation amount</label>\n <input list=\"amounts\" name=\"amount\" id=\"amount\">\n <[3] id=\"amounts\">\n  <option value=\"5 per month\"><option value=\"20 per month\"><option value=\"75 per year\">\n </[3]>\n</fieldset>",
      "id": "web-067"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which Event method prevents normal form submission so invalid data remains available for custom error messages?",
      "options": [
        "preventDefault()",
        "defaultPrevented()",
        "cancelable",
        "abort"
      ],
      "correct": 0,
      "explanation": "Call preventDefault() on the cancelable submit event to stop the browser’s normal submission and keep the current page available for custom feedback. defaultPrevented is a Boolean property reporting whether cancellation has occurred, not a method to cancel it. cancelable is likewise a property describing whether cancellation is possible. abort is not the Event method for canceling submission. This assumes the custom code receives the event; native invalid controls can prevent submit from firing in the first place.",
      "id": "web-068"
    },
    {
      "chapter": "lifecycle",
      "type": "drag_drop",
      "question": "Match each lifecycle stage to its task.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Deploy"
        },
        {
          "id": "i2",
          "text": "Design"
        },
        {
          "id": "i3",
          "text": "Develop"
        },
        {
          "id": "i4",
          "text": "Maintain"
        },
        {
          "id": "i5",
          "text": "Plan"
        },
        {
          "id": "i6",
          "text": "Test"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Build the website",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Publish the website",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Define the layout",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Monitor and update the website",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Evaluate functionality and usability",
          "correctItemId": "i6"
        },
        {
          "id": "z6",
          "label": "Identify purpose and audience",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Develop means implementing and building the website. Deploy means publishing it to its target environment. Design defines the layout and interactions before implementation. Maintain monitors the released site and applies updates. Test evaluates functionality and usability against expectations. Plan identifies the purpose and audience that drive later choices. These mappings separate deciding what to build, specifying it, building it, checking it, releasing it, and supporting it; none is a synonym for all six tasks.",
      "id": "web-069"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "With order values Zoo Trip:1, Bears:2, Lions:3, Tigers:4, Tigers appears first.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "The selector section p selects the parent section.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "With flex-wrap:wrap and min-width:200px, items wrap when they cannot all fit on one line.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "The first statement is No: ascending order values place Zoo Trip first and Tigers last among the listed items, not Tigers first. The second is No: section p selects p descendants of section; the final selector component is the selected element, not its ancestor. The third is Yes: flex-wrap: wrap permits multiple flex lines, and minimum widths prevent items from compressing indefinitely, so items wrap when the available main-axis space cannot accommodate them together.",
      "id": "web-070"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which three are Web Storage methods? Choose three.",
      "options": [
        "setItem",
        "cookie",
        "removeItem",
        "write",
        "clear"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "setItem saves a string value under a key, removeItem deletes one named entry, and clear removes every entry from that Storage object. They work on both localStorage and sessionStorage. cookie refers to the separate document.cookie interface and is not a Storage method. write is not a Web Storage method; document.write writes markup to a document, not key-value data to Storage. Clearing storage is scoped to that storage area, not every origin in the browser.",
      "id": "web-071"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which entry matches the entire pattern shown?",
      "options": [
        "AGbe-23h-234-HBG6",
        "kukX-34-4938-WJDF",
        "Kgyn-23-3978-Uhj6",
        "y7Ts-A3-4876-ASFr"
      ],
      "correct": 1,
      "explanation": "The pattern requires four ASCII letters, a hyphen, two digits, a hyphen, four digits, another hyphen, and four ASCII letters. kukX-34-4938-WJDF matches every group. AGbe-23h-234-HBG6 has an extra letter in the second group, only three digits in the third, and a digit in the final group. Kgyn-23-3978-Uhj6 ends with a digit. y7Ts-A3-4876-ASFr has a digit in the first letters-only group and a letter in the second digits-only group.",
      "code": "pattern=\"[a-zA-Z]{4}-[0-9]{2}-[0-9]{4}-[a-zA-Z]{4}\"",
      "id": "web-072"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which interface design choice most directly increases accidental activation of neighboring touch targets?",
      "options": [
        "Placing input areas too close together",
        "Using opaque backgrounds",
        "Using larger, well-separated controls",
        "Using high-contrast labels"
      ],
      "correct": 0,
      "explanation": "Closely spaced input areas make it easier for a finger contact to hit a neighboring target instead of the intended one. Touch contacts cover an area and are less precise than a mouse pointer, so spacing matters in addition to target size. Larger, well-separated controls reduce that problem. Opaque backgrounds and high-contrast labels can improve visual clarity but do not directly increase accidental neighboring-target activation as described.",
      "id": "web-073"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which form correctly shows the numeric sum of inputs a and b in output c?",
      "options": [
        "<form oninput=\"c.value=Number(a.value)+Number(b.value)\"><input type=\"number\" name=\"a\" value=\"50\"> + <input type=\"number\" name=\"b\" value=\"50\"><output name=\"c\" for=\"a b\"></output></form>",
        "<form oninput=\"c.value=a.value+b.value\"><input name=\"a\" value=\"50\"><input name=\"b\" value=\"50\"><output name=\"c\"></output></form>",
        "<form><input name=\"a\"><input name=\"b\"><output name=\"c\"></output></form>"
      ],
      "correct": 0,
      "explanation": "The first form converts both input value strings with Number before adding them, so entering 50 and 50 produces the numeric result 100 when an input event occurs. The second concatenates strings, yielding \"5050\", and the third supplies no calculation handler at all. Named controls are available in the inline form handler’s scope. The output for attribute expresses associations by element IDs; these inputs have names but no IDs, so that association is not correctly resolved even though the calculation still runs. The blank output is not automatically initialized before input.",
      "id": "web-074"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which media query applies to screen viewports 480 CSS pixels wide or less?",
      "options": [
        "@media screen display and (width:480px)",
        "@media screen and (width:480px)",
        "@media screen and (max-width:480px)",
        "@media screen-width:480px"
      ],
      "correct": 2,
      "explanation": "@media screen and (max-width:480px) selects screen media whose viewport width is at most 480 CSS pixels, including 480 itself. A width:480px equality test matches exactly that width, not all smaller widths. screen display is not the proper media-type syntax, and @media screen-width:480px is not a valid media query rule. CSS pixels are layout units, not necessarily individual physical device pixels.",
      "id": "web-075"
    },
    {
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match each input attribute to its role.",
      "dragItems": [
        {
          "id": "i1",
          "text": "maxlength"
        },
        {
          "id": "i2",
          "text": "multiple"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "placeholder"
        },
        {
          "id": "i5",
          "text": "required"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Specifies a regular expression for validation",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Shows an example hint while the field is empty",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Makes the input mandatory",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Allows multiple files, or multiple email addresses for type=email",
          "correctItemId": "i2"
        }
      ],
      "explanation": "pattern supplies a regular expression for validating supported textual input values. placeholder provides an example or hint while the field is empty, without supplying a submitted default. required makes a supported control mandatory. multiple allows multiple file selections or multiple email addresses for the applicable input types. maxlength, the unused item, limits textual length; it does not define a pattern or make a field mandatory. These attributes are type-dependent and should not be treated as universally interchangeable.",
      "id": "web-076"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete the filter for an 80% sepia effect.",
      "dragItems": [
        {
          "id": "i1",
          "text": "sepia(80)"
        },
        {
          "id": "i2",
          "text": "sepia(20)"
        },
        {
          "id": "i3",
          "text": "sepia(20%)"
        },
        {
          "id": "i4",
          "text": "sepia(80%)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Filter value",
          "correctItemId": "i4"
        }
      ],
      "explanation": "sepia(80%) expresses a partial sepia effect at the requested 80% amount. sepia(20%) instead requests 20%, so it is too small. Unitless amounts use 1 as the equivalent of 100%, not 100 as the baseline: sepia(80) and sepia(20) therefore exceed 100% and are clamped to the full sepia effect for rendering. They do not mean 80% and 20%. The percentage sign is consequently essential for the values offered here.",
      "code": ".sepia { filter: [1]; }",
      "id": "web-077"
    },
    {
      "chapter": "lifecycle",
      "type": "drag_drop",
      "question": "Order these lifecycle stages using the specified six-stage model.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Plan"
        },
        {
          "id": "i2",
          "text": "Develop"
        },
        {
          "id": "i3",
          "text": "Stage"
        },
        {
          "id": "i4",
          "text": "Maintain"
        },
        {
          "id": "i5",
          "text": "Test"
        },
        {
          "id": "i6",
          "text": "Deploy"
        },
        {
          "id": "i7",
          "text": "Design"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i5"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i6"
        },
        {
          "id": "z6",
          "label": "Step 6",
          "correctItemId": "i4"
        }
      ],
      "explanation": "The six stages are Plan, Design, Develop, Test, Deploy, and Maintain in that order. Planning establishes goals; design specifies the solution; development builds it; testing checks it; deployment publishes it; maintenance supports and improves the release. Stage is the unused distractor: staging can be an environment or deployment step, but is not an additional named phase in this specified six-stage model. The order describes the chosen teaching model, not a claim that real projects never iterate.",
      "id": "web-078"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which element supplies predefined suggestions while still allowing custom text in an associated input?",
      "options": [
        "select",
        "input",
        "datalist",
        "fieldlist"
      ],
      "correct": 2,
      "explanation": "datalist supplies option suggestions for an input linked through its list attribute, and that input can still accept a different value unless separate validation forbids it. select offers a defined list of options rather than an editable custom-text field. input is the receiving control but does not by itself contain the predefined suggestions. fieldlist is not the standard HTML element for this feature. Browser presentation of suggestions varies, but the semantic relationship is the same.",
      "id": "web-079"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "What does the function name after this. represent in the following call?",
      "options": [
        "Inheritance",
        "Instantiation",
        "A method",
        "A constructor declaration"
      ],
      "correct": 2,
      "explanation": "getTotal is a method accessed through this and then called using parentheses. The call returns its result to the caller through return. It does not itself declare inheritance; that would be expressed with mechanisms such as extends. There is no new expression, so this is not an instantiation expression. It also does not declare a constructor. The code assumes this resolves to an object with a callable getTotal property; otherwise execution would fail, but the syntax still represents a method call.",
      "code": "return this.getTotal();",
      "id": "web-080"
    },
    {
      "chapter": "graphics",
      "type": "multiple",
      "question": "Which three are CanvasRenderingContext2D transformation methods? Choose three.",
      "options": [
        "flip",
        "translate",
        "skewX",
        "scale",
        "shrink",
        "rotate"
      ],
      "correct": [
        1,
        3,
        5
      ],
      "explanation": "translate shifts the canvas coordinate system, scale resizes its axes, and rotate turns it by an angle in radians. These are standard CanvasRenderingContext2D methods. flip and shrink are not such method names; reflection or shrinking can instead be performed using appropriate scale factors. skewX is a CSS transform function, not a dedicated canvas context method. A canvas skew can be represented by transform or setTransform matrix coefficients.",
      "id": "web-081"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which format is commonly used to serialize a JavaScript object for exchange with a web server?",
      "options": [
        "XML",
        "JSON",
        "HTML",
        "ASP.NET"
      ],
      "correct": 1,
      "explanation": "JSON is the conventional serialization format for exchanging JavaScript-style data structures with web servers, typically produced by JSON.stringify and read by JSON.parse. It represents data, not executable JavaScript methods. XML is also a structured exchange format and can encode similar information, but is not the direct conventional JavaScript-object serialization answer here. HTML primarily represents document content, and ASP.NET is a web application framework rather than a serialization format.",
      "id": "web-082"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which two CSS transform functions explicitly operate in three dimensions? Choose two.",
      "options": [
        "rotateX(30deg)",
        "translateZ(20px)",
        "skewY(20deg)",
        "translate(20px, 10px)"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "rotateX rotates around the horizontal x axis, moving points through the y–z plane, and translateZ moves along the depth axis. Both explicitly use the 3D transform model. skewY is a two-dimensional shear, while translate with two lengths moves in the x–y plane. A perspective projection may be needed to make a depth change visually obvious; lack of a visible effect does not make translateZ a 2D function.",
      "id": "web-083"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which three are valid CSS gradient functions? Choose three.",
      "options": [
        "repeating-radial-gradient",
        "radial-gradient",
        "linear-gradient",
        "optical-gradient",
        "transparent-gradient",
        "opaque-gradient"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "linear-gradient creates a color transition along a line, radial-gradient creates one outward from a center, and repeating-radial-gradient repeats a radial gradient pattern. All three are CSS image-generating functions commonly used in backgrounds. optical-gradient, transparent-gradient, and opaque-gradient are not standard gradient function names. Transparent or opaque color stops can appear inside real gradients, but those adjectives do not define separate CSS functions.",
      "id": "web-084"
    },
    {
      "chapter": "html-forms",
      "type": "multiple",
      "question": "Which two input types provide built-in format checking for nonempty values? Choose two.",
      "options": [
        "email",
        "block",
        "url",
        "phone",
        "location"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "email and url have built-in type-mismatch checks for nonempty values. An email input checks the browser’s email syntax rules, while a url input expects a valid absolute URL. Neither check proves the destination exists, and required is separately needed to reject empty input. block, phone, and location are not standard HTML input type keywords. tel is the standard telephone type, but it deliberately does not enforce one universal phone-number format.",
      "id": "web-085"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which function schedules a callback to run once after a delay?",
      "options": [
        "setTimeout()",
        "timer()",
        "animate()",
        "keyframes()"
      ],
      "correct": 0,
      "explanation": "setTimeout schedules a callback to run once after at least the requested delay, subject to event-loop scheduling and browser throttling. Repetition requires scheduling another timeout or using setInterval. timer and keyframes are not standard global scheduling functions. animate can name an animation-related API or library method in a different context, but is not the browser timer function requested here. A delay is not a guarantee of exact wall-clock execution time.",
      "id": "web-086"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which pattern attribute requires one or more ASCII letters or digits?",
      "options": [
        "pattern=\"[A-Za-z0-9]+\"",
        "pattern=\"digits\"",
        "pattern=\"{A-Z}\"",
        "pattern=\"[A-z0-9]\""
      ],
      "correct": 0,
      "explanation": "[A-Za-z0-9]+ matches one or more ASCII letters or digits. The plus requires at least one matching character for a nonempty value, and HTML pattern validation matches the entire value. The literal word digits matches that word, not arbitrary numbers. {A-Z} does not express a letter character class. [A-z0-9] lacks repetition and the A-z range includes punctuation between Z and a. required must be added if the control must also reject an empty value.",
      "id": "web-087"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two statements about ordinary CSS floats are true? Choose two.",
      "options": [
        "Floats can be moved vertically with float:up",
        "Floats always use viewport coordinates",
        "A float can be placed at the left or right of its containing block",
        "A floated box is removed from normal flow while inline content can wrap around it",
        "Floats are always centered"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "A float can be aligned to the left or right of its containing block. Its box is taken out of normal flow, but relevant inline content still wraps around it and is shortened by its presence. float:up is not a valid ordinary float value, and floats do not inherently use viewport coordinates. They also are not always centered. The special wrapping behavior distinguishes floats from absolute positioning, which does not normally cause text lines to wrap around the positioned box.",
      "id": "web-088"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which CSS property changes the opacity of an entire image element?",
      "options": [
        "opacity",
        "blur",
        "brightness",
        "contrast"
      ],
      "correct": 0,
      "explanation": "opacity changes the transparency of the element’s composited rendering, including the whole image. For example, opacity:0.5 makes it half opaque. blur, brightness, and contrast are names of filter functions, not standalone CSS properties for setting whole-element opacity. They change sharpness, luminance, or tonal contrast respectively. A filter can also include opacity(), but the property explicitly offered for this task is opacity.",
      "id": "web-089"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which array method is idiomatic for visiting every selected element solely to attach an event listener, without creating a mapped or filtered result array?",
      "options": [
        "map",
        "forEach",
        "filter",
        "do...while"
      ],
      "correct": 1,
      "explanation": "forEach executes a callback for each present array entry and is intended for side effects such as attaching listeners; it returns undefined rather than constructing a result array. map builds an array of callback results, while filter builds an array of retained entries, so both do unnecessary result construction for the stated sole purpose. Their callbacks can perform side effects, but that is not the idiomatic no-result-array operation requested. do...while is a loop statement, not an array method. Assume the selected elements have been collected into the stated array.",
      "id": "web-090"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which declaration establishes a flex container with a row main axis by default?",
      "options": [
        "display: flex;",
        "display: inline;",
        "display: block;",
        "display: contents;"
      ],
      "correct": 0,
      "explanation": "display:flex establishes a flex container. With the initial flex-direction:row, the main axis follows the inline direction, which is usually horizontal in ordinary writing modes. display:inline and display:block do not enable flex layout; their children retain ordinary layout behavior. display:contents suppresses the element’s own principal box and does not establish it as a flex container. Other CSS can override the direction, so the question correctly qualifies the row behavior as the default.",
      "id": "web-091"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which JavaScript library provides built-in effects such as fadeIn() and slideDown()?",
      "options": [
        "React",
        "Node.js",
        "Angular",
        "jQuery"
      ],
      "correct": 3,
      "explanation": "jQuery provides effect methods including fadeIn and slideDown, which animate opacity or dimensions using its effects system. React and Angular are UI frameworks/libraries with different rendering and component models; those exact methods are not their built-in effects interface. Node.js is a JavaScript runtime, not a DOM animation library. JavaScript libraries can be combined, but that does not change which library defines these named methods.",
      "id": "web-092"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which Geolocation method requests the current device position once?",
      "options": [
        "navigator.geolocation.getCurrentPosition(callback)",
        "navigator.getMyLocation()",
        "navigator.gpsLocation()",
        "navigator.gpsPosition()"
      ],
      "correct": 0,
      "explanation": "navigator.geolocation.getCurrentPosition(callback) is the standard one-shot position request. A successful request invokes the supplied callback with a position object; an error callback can also be supplied. navigator.getMyLocation, navigator.gpsLocation, and navigator.gpsPosition are not standard methods. The result need not come from GPS alone: browsers can use several location sources. Secure-context, permission, and policy requirements still apply, and a request is not a guarantee that a position will be available.",
      "id": "web-093"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which property can replace a div’s contents using HTML markup?",
      "options": [
        "content",
        "innerHTML",
        "node",
        "Value",
        "HTML"
      ],
      "correct": 1,
      "explanation": "innerHTML parses an assigned string as HTML and replaces the element’s child content with the parsed result. That makes it different from textContent, which would insert plain text. content, node, Value, and HTML are not the div property for this operation; property names are also case-sensitive. Untrusted strings must not be inserted as HTML without appropriate sanitization because markup can introduce script-related security risks. For plain text, prefer textContent.",
      "id": "web-094"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which three are standard DOM event-handler property names? Choose three.",
      "options": [
        "onmodify",
        "onmousepoint",
        "alert",
        "onclick",
        "ondblclick",
        "onblur"
      ],
      "correct": [
        3,
        4,
        5
      ],
      "explanation": "onclick, ondblclick, and onblur are standard event-handler properties for click, double-click, and loss of focus. onmodify and onmousepoint are not the standard event-handler names for these DOM interactions. alert is a dialog function, not an event-handler property. Assigning element.onclick = handler registers a property handler; addEventListener uses the event name click without the on prefix and can register multiple independent listeners.",
      "id": "web-095"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which declaration makes an image 75% transparent?",
      "options": [
        "opacity:0.75;",
        "transparency:0.75;",
        "transparency:0.25;",
        "opacity:0.25;"
      ],
      "correct": 3,
      "explanation": "75% transparent means only 25% opaque, so the declaration is opacity:0.25. opacity:0.75 means 75% opaque and only 25% transparent, reversing the requirement. CSS has no standard transparency property with either value, so both transparency alternatives are invalid for this task. Opacity affects compositing of the whole element; it does not remove its layout box or automatically prevent pointer interaction.",
      "id": "web-096"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two statements about this grid-template declaration are true? Choose two.",
      "options": [
        "It defines two columns and three rows",
        "The first row has automatic height",
        "The first column has automatic sizing",
        "It defines two rows and three columns"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "In the grid-template shorthand, values before the slash define rows and those after it define columns. Thus there are two rows, 100px and 300px, and three columns, auto, 200px, and 400px. The first column is automatically sized, while the first row is explicitly 100px. The option claiming two columns and three rows reverses the slash’s meaning. auto sizing is content- and layout-dependent rather than a guaranteed equal fraction of remaining space.",
      "code": "grid-template: 100px 300px / auto 200px 400px;",
      "id": "web-097"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which Storage method saves a value under a key?",
      "options": [
        "localStorage.insert(key, value)",
        "localStorage.addItem(key, value)",
        "localStorage.setItem(key, value)",
        "localStorage.append(key, value)"
      ],
      "correct": 2,
      "explanation": "localStorage.setItem(key, value) stores a string value under the given key, replacing an existing entry with that key. Non-string values are converted to strings; objects commonly need JSON.stringify first. insert, addItem, and append are not Storage method names. Saving can fail because of quota or access restrictions, so production code should handle exceptions. The API stores data in the current origin’s localStorage area, not in an arbitrary server database.",
      "id": "web-098"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which three Web Storage methods save one item, read one item and delete one item? Choose three.",
      "options": [
        "setItem()",
        "refresh()",
        "getItem()",
        "synch()",
        "removeItem()",
        "retrieveItem()"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "setItem saves one entry, getItem reads the string value for a key, and removeItem deletes that key. getItem returns null when no such entry exists. refresh, synch, and retrieveItem are not standard Storage methods. removeItem differs from clear, which deletes all entries in the storage area. Using these methods makes the intended operation explicit rather than confusing storage keys with properties of the Storage object itself.",
      "id": "web-099"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "What is the term for interpreting structured text to obtain its component values?",
      "options": [
        "Parsing",
        "Exclusion",
        "Elimination",
        "None of these"
      ],
      "correct": 0,
      "explanation": "Parsing means interpreting structured input according to its grammar to obtain meaningful component values or a structured representation. JSON.parse, for example, converts JSON text into JavaScript values and throws for invalid JSON syntax. Exclusion and elimination describe removing things, not interpreting a structured representation. Since Parsing directly names the operation, None of these is incorrect. Parsing is distinct from serialization, which goes in the opposite direction to produce text.",
      "id": "web-100"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which technique lets JavaScript exchange data with a server and update part of a page without a full reload?",
      "options": [
        "ASP.NET alone",
        "Visual Basic",
        "AJAX",
        "SQL alone"
      ],
      "correct": 2,
      "explanation": "AJAX describes asynchronous browser-server data exchange followed by page updates without a full document navigation. Modern code can implement it using fetch or XMLHttpRequest; the exchanged data need not be XML despite the historical name. ASP.NET can implement the server side but alone does not describe the browser interaction technique. Visual Basic is a programming language and SQL queries databases; neither by itself supplies the asynchronous in-page update mechanism.",
      "id": "web-101"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the code to fill this rectangle pure yellow.",
      "dragItems": [
        {
          "id": "i1",
          "text": "fillStyle"
        },
        {
          "id": "i2",
          "text": "color"
        },
        {
          "id": "i3",
          "text": "#FFFF00"
        },
        {
          "id": "i4",
          "text": "#00FFFF"
        },
        {
          "id": "i5",
          "text": "#FF00FF"
        },
        {
          "id": "i6",
          "text": "fill()"
        },
        {
          "id": "i7",
          "text": "color()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i6"
        }
      ],
      "explanation": "fillStyle is the context property selecting the fill paint. #FFFF00 means red=255, green=255, blue=0, which is yellow. After rect adds the 200-by-100 rectangle to the current path at (50,50), fill() paints its interior. #00FFFF is cyan and #FF00FF is magenta, so those colors fail the requirement. The canvas 2D context does not use color as this paint property or color() as the path-painting method.",
      "code": "ctx.beginPath();\nctx.rect(50,50,200,100);\nctx.[1] = \"[2]\";\nctx.[3];",
      "id": "web-102"
    },
    {
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Order the code to draw a line from (0,0) to (100,100) on topLeftCanvas.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ctx.stroke();"
        },
        {
          "id": "i2",
          "text": "const cv = document.getElementById(\"topLeftCanvas\");"
        },
        {
          "id": "i3",
          "text": "ctx.moveTo(0,0);"
        },
        {
          "id": "i4",
          "text": "ctx.lineTo(100,100);"
        },
        {
          "id": "i5",
          "text": "const ctx = cv.getContext(\"2d\");"
        },
        {
          "id": "i6",
          "text": "ctx.beginPath();"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "Line 4",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Line 5",
          "correctItemId": "i4"
        },
        {
          "id": "z6",
          "label": "Line 6",
          "correctItemId": "i1"
        }
      ],
      "explanation": "First get the canvas by its id, then get its 2D context from that element. beginPath starts a fresh path so unrelated earlier subpaths are not stroked. moveTo(0,0) establishes the start without drawing, lineTo(100,100) adds the diagonal segment, and stroke paints the outline. Using ctx before initialization would fail, and stroking before lineTo would not paint the requested segment. With default axes, the segment slopes down and right.",
      "id": "web-103"
    },
    {
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Match the SVG filter primitives to their roles.",
      "dragItems": [
        {
          "id": "i1",
          "text": "feOffset"
        },
        {
          "id": "i2",
          "text": "feMerge"
        },
        {
          "id": "i3",
          "text": "feBlend"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blends two image inputs",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Offsets a filter input, often as one step in building a shadow",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Combines several filter results into a single output",
          "correctItemId": "i2"
        }
      ],
      "explanation": "feBlend blends two image inputs using its selected blend mode. feOffset shifts an input by dx and dy; that makes it useful within a shadow pipeline, but offset alone does not necessarily provide blur or shadow coloring. feMerge composites multiple filter results into one output using its child feMergeNode inputs. These roles separate blending, geometric displacement, and multi-input combination rather than treating every filter primitive as a complete shadow generator.",
      "id": "web-104"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Text should have sufficient contrast against its background.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Headings and subheadings help organize content.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "All whitespace around content blocks should be removed.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Sufficient text/background contrast is Yes because it helps readers distinguish glyphs and is important for accessibility. Headings and subheadings organizing content is also Yes: meaningful hierarchy supports scanning and navigation. Removing all whitespace is No because spacing separates groups, reduces clutter, and improves readability. Whitespace should be purposeful, not universally eliminated. These are complementary design principles rather than a tradeoff in which one requires abandoning another.",
      "id": "web-105"
    },
    {
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "Skew the div whose id is didYouKnow by 15deg on X and 20deg on Y.",
      "dragItems": [
        {
          "id": "i1",
          "text": "20deg,15deg"
        },
        {
          "id": "i2",
          "text": "15deg,20deg"
        },
        {
          "id": "i3",
          "text": "#didYouKnow"
        },
        {
          "id": "i4",
          "text": "skewY"
        },
        {
          "id": "i5",
          "text": ".didYouKnow"
        },
        {
          "id": "i6",
          "text": "skew"
        },
        {
          "id": "i7",
          "text": "skewX"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Selector",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Transform function",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Arguments",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Use #didYouKnow so the resulting selector div#didYouKnow targets the div with that id. Use skew with arguments 15deg,20deg: the first angle controls the x shear and the second the y shear. Swapping them reverses the requested effects. .didYouKnow would select a class, not the stated id. skewX and skewY each handle one axis and do not accept this two-axis argument pair as the intended combined function.",
      "code": "div[1] { transform: [2]([3]); }",
      "id": "web-106"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete a three-pixel blur.",
      "dragItems": [
        {
          "id": "i1",
          "text": "gaussian"
        },
        {
          "id": "i2",
          "text": "filter"
        },
        {
          "id": "i3",
          "text": "blur"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Property",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Function",
          "correctItemId": "i3"
        }
      ],
      "explanation": "The completed declaration is filter: blur(3px). filter is the CSS property that accepts a filter-function list, and blur is the function whose length argument controls the blur. gaussian is not a standard CSS property or this function’s name, even though the blur is based on a Gaussian operation. A pixel length is appropriate here; a percentage would not be accepted for the blur radius.",
      "code": ".bkblur { [1]: [2](3px); }",
      "id": "web-107"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Choose the element and closing tag for a dropdown that restricts users to listed options.",
      "dragItems": [
        {
          "id": "i1",
          "text": "datalist"
        },
        {
          "id": "i2",
          "text": "select"
        },
        {
          "id": "i3",
          "text": "fieldset"
        },
        {
          "id": "i4",
          "text": "label"
        },
        {
          "id": "i5",
          "text": "</datalist>"
        },
        {
          "id": "i6",
          "text": "</select>"
        },
        {
          "id": "i7",
          "text": "</fieldset>"
        },
        {
          "id": "i8",
          "text": "</label>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Opening element",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Closing tag",
          "correctItemId": "i6"
        }
      ],
      "explanation": "Use select and close it with </select>. A select presents the option elements as the available choices rather than providing an editable custom-text field. datalist and </datalist> are for suggestions associated with a separate input and do not impose the requested restriction. fieldset groups controls, and label names a control; neither creates an option-selection menu. The opening and closing elements must match to produce the intended structure.",
      "code": "<[1] id=\"seasons\">\n <option>Winter</option><option>Spring</option>\n <option>Summer</option><option>Fall</option>\n[2]",
      "id": "web-108"
    },
    {
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match each input type to its use.",
      "dragItems": [
        {
          "id": "i1",
          "text": "phone"
        },
        {
          "id": "i2",
          "text": "number"
        },
        {
          "id": "i3",
          "text": "text"
        },
        {
          "id": "i4",
          "text": "tel"
        },
        {
          "id": "i5",
          "text": "range"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Telephone-number entry",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Default input type",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Slider control",
          "correctItemId": "i5"
        }
      ],
      "explanation": "tel is the standard telephone input type; phone is not a standard type keyword. text is the default input type, including fallback for unrecognized type values. range produces a slider for selecting within numeric bounds. number, the unused valid type, is an editable numeric control rather than the telephone or slider control requested. A phone number is an identifier that may contain formatting characters, so treating it simply as a mathematical number is inappropriate.",
      "id": "web-109"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An ordinary block box with auto width normally uses available inline space.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A non-replaced inline box normally uses the width needed by its content.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "An ordinary block box in normal flow starts in the middle of a text line.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Yes: an ordinary in-flow block with auto width generally uses the available inline space after accounting for relevant margins, borders, and padding. Yes: a non-replaced inline box generally takes the space its content needs, potentially fragmenting across lines rather than accepting an ordinary width declaration. No: an ordinary block box in normal block flow does not begin in the middle of an existing text line; it participates as a block-level box. Flex, Grid, positioning, and replaced elements have different sizing rules.",
      "id": "web-110"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Match the overflow declarations to the required behavior.",
      "dragItems": [
        {
          "id": "i1",
          "text": "scroll"
        },
        {
          "id": "i2",
          "text": "hidden"
        },
        {
          "id": "i3",
          "text": "visible"
        },
        {
          "id": "i4",
          "text": "show"
        },
        {
          "id": "i5",
          "text": "none"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Always request scrollbars, subject to platform overlay behavior",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Clip overflow without visible user scrollbars",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Allow content to paint outside the box",
          "correctItemId": "i3"
        }
      ],
      "explanation": "scroll requests scrollable overflow and scrollbars even when content fits, though overlay-scrollbar visibility is platform-dependent. hidden clips overflow without user-visible scrollbars; it can still allow programmatic scrolling. visible lets content paint beyond the box and does not itself create the requested scroll container. show and none are not valid overflow values here. This mapping distinguishes painting outside, clipping, and user scrolling rather than equating all clipped content with non-scrollable content.",
      "code": ".scrollbars { overflow: [1]; }\n.noscroll { overflow: [2]; }\n.outside { overflow: [3]; }",
      "id": "web-111"
    },
    {
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Complete the rule so declared widths and heights include padding and borders for all selected elements.",
      "dragItems": [
        {
          "id": "i1",
          "text": "content-box"
        },
        {
          "id": "i2",
          "text": "html"
        },
        {
          "id": "i3",
          "text": "*"
        },
        {
          "id": "i4",
          "text": "box-sizing"
        },
        {
          "id": "i5",
          "text": "border-box"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Selector",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Property",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Value",
          "correctItemId": "i5"
        }
      ],
      "explanation": "The completed rule is * { box-sizing: border-box; }. The universal selector applies it to all matching elements, the property changes the box-sizing model, and border-box includes padding and borders inside declared width and height. content-box instead applies those dimensions to content, adding padding and borders outside. html would select only the root element, and box-sizing is not inherited by default. This selector does not automatically include pseudo-elements unless they are selected separately.",
      "code": "[1] { [2]: [3]; }",
      "id": "web-112"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the query to make the background white at screen widths of 640px or less.",
      "dragItems": [
        {
          "id": "i1",
          "text": "media"
        },
        {
          "id": "i2",
          "text": "(max-width: 640px)"
        },
        {
          "id": "i3",
          "text": "min-width: 640px"
        },
        {
          "id": "i4",
          "text": "max-width: 640px"
        },
        {
          "id": "i5",
          "text": "(min-width:640px)"
        },
        {
          "id": "i6",
          "text": "screen"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Rule keyword",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Media type",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Condition",
          "correctItemId": "i2"
        }
      ],
      "explanation": "The blanks produce @media only screen and (max-width: 640px). media is the at-rule keyword, screen the media type, and the parenthesized max-width condition includes widths equal to or below 640 CSS pixels. min-width would apply at the opposite side of the breakpoint. A bare max-width:640px without parentheses is not valid in this media-feature position. only is a legacy compatibility qualifier, not a different width comparison.",
      "code": "@[1] only [2] and [3] { body { background-color: white; } }",
      "id": "web-113"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Assume sufficient space and flex-shrink:0 on all items. Set img3’s flex base size to 300px.",
      "dragItems": [
        {
          "id": "i1",
          "text": "style"
        },
        {
          "id": "i2",
          "text": "span"
        },
        {
          "id": "i3",
          "text": "css"
        },
        {
          "id": "i4",
          "text": "flex-basis:300px"
        },
        {
          "id": "i5",
          "text": "flex-grow:300px"
        },
        {
          "id": "i6",
          "text": "flex-shrink:300px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Attribute",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Declaration",
          "correctItemId": "i4"
        }
      ],
      "explanation": "style is the HTML attribute for inline CSS declarations. flex-basis:300px sets img3’s initial main size for flex layout, while the existing flex-shrink:0 prevents negative-free-space shrinking. flex-grow and flex-shrink take unitless factors, so 300px is invalid for either. span is an element name, not the inline-style attribute, and css is not that attribute either. The question asks for the flex base size; minimum-size constraints and other flex rules can still matter to final used size.",
      "code": "<div style=\"display:flex\">\n <div style=\"flex-shrink:0\">img1</div>\n <div style=\"flex-shrink:0\">img2</div>\n <div [1]=\"flex-shrink:0; [2]\">img3</div>\n</div>",
      "id": "web-114"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete a three-column grid: 200px, 250px, then remaining space.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid"
        },
        {
          "id": "i2",
          "text": "grid-container"
        },
        {
          "id": "i3",
          "text": "grid-template-columns"
        },
        {
          "id": "i4",
          "text": "remainder"
        },
        {
          "id": "i5",
          "text": "auto"
        },
        {
          "id": "i6",
          "text": "grid-template-rows"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display value",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Track property",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Third track",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Use display:grid and grid-template-columns:200px 250px auto. The first two tracks are fixed; the auto track is sized from its content and can stretch to take remaining space under the default alignment in a definite-size container. grid-container and remainder are not the required CSS keywords. grid-template-rows would define rows instead. Unlike an explicit 1fr track, auto is content-sensitive and may overflow if its minimum contribution is too large; the stem’s remaining-space wording assumes an ordinary fitting layout.",
      "code": ".threegrid { display: [1]; [2]: 200px 250px [3]; }",
      "id": "web-115"
    },
    {
      "chapter": "javascript",
      "type": "drag_drop",
      "question": "Match each code snippet to its object-oriented concept.",
      "dragItems": [
        {
          "id": "i1",
          "text": "class Tricycle extends Bicycle {}"
        },
        {
          "id": "i2",
          "text": "class Bicycle {}"
        },
        {
          "id": "i3",
          "text": "this.bicyclename = brand;"
        },
        {
          "id": "i4",
          "text": "let myBicycle = new Tricycle(\"Saturn\",\"Silver\");"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Instantiation",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Property assignment",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Inheritance",
          "correctItemId": "i1"
        }
      ],
      "explanation": "new Tricycle(\"Saturn\",\"Silver\") is instantiation because it constructs a new object. this.bicyclename = brand assigns a property on the current object. class Tricycle extends Bicycle declares inheritance from Bicycle, making Tricycle the subclass. class Bicycle {} is the unused class declaration: it defines a class but does not instantiate it or assign the named instance property. Passing constructor arguments is legal even when the minimal class definitions shown do not use them.",
      "id": "web-116"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which DOM method returns all shirt elements from an XML document?",
      "options": [
        "getElementsByTagName",
        "getElementsByName",
        "getElementById"
      ],
      "correct": 0,
      "explanation": "getElementsByTagName(\"shirt\") returns a collection of elements with that tag name from the XML document. Tag-name matching is case-sensitive for XML, so Shirt would not necessarily match. getElementsByName searches name attributes in the contexts where it is supported, not XML element names. getElementById selects one element identified by an ID rather than every shirt element. Namespace-aware XML may require getElementsByTagNameNS, but no namespace qualification is supplied here.",
      "code": "const shirts = xmlDoc.[method](\"shirt\");",
      "id": "web-117"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete the class for a five-pixel blur.",
      "dragItems": [
        {
          "id": "i1",
          "text": "blur(5px)"
        },
        {
          "id": "i2",
          "text": "blur(10px)"
        },
        {
          "id": "i3",
          "text": "blur(50%)"
        },
        {
          "id": "i4",
          "text": "blur(5%)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Filter",
          "correctItemId": "i1"
        }
      ],
      "explanation": "blur(5px) is the required filter function with a five-pixel blur length. blur(10px) is valid syntax but requests a different amount. blur(50%) and blur(5%) use percentages, which blur does not accept. The number controls the Gaussian blur’s standard deviation, not a transparency percentage or a guarantee that exactly five surrounding pixels are affected. The existing filter property supplies the proper declaration context.",
      "code": ".blurred { filter: [1]; }",
      "id": "web-118"
    },
    {
      "chapter": "lifecycle",
      "type": "single",
      "question": "In the specified Plan → Design → Develop → Test → Deploy → Maintain model, which stage follows Design?",
      "options": [
        "Test",
        "Deploy",
        "Develop",
        "Plan"
      ],
      "correct": 2,
      "explanation": "Develop follows Design in the sequence explicitly supplied. It implements the designed structure and behavior before the Test stage validates the build. Test is therefore one step too late, Deploy follows testing, and Plan comes before design. Real teams may iterate or overlap work, but the question asks about the given model rather than a universal, exceptionless project process.",
      "id": "web-119"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which three are valid CSS gradient functions? Choose three.",
      "options": [
        "conic-gradient",
        "radial-gradient",
        "linear-gradient",
        "circular-gradient",
        "depth-gradient",
        "multi-gradient"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "conic-gradient transitions colors around a center by angle, radial-gradient radiates from a center, and linear-gradient transitions along a line. All three are standard CSS gradient functions that generate image values. circular-gradient, depth-gradient, and multi-gradient are not standard function names. A radial gradient may have a circular shape, and multiple gradient layers can be combined, but those capabilities do not create functions named circular-gradient or multi-gradient.",
      "id": "web-120"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "What does background-size:cover do while preserving aspect ratio?",
      "options": [
        "Repeats the image without scaling",
        "Distorts the image to fill the container",
        "Scales to cover the container, potentially cropping part of the image",
        "Never resizes the image"
      ],
      "correct": 2,
      "explanation": "cover scales the image uniformly until both dimensions of the background positioning area are covered. Preserving aspect ratio can make one scaled dimension larger than the area, so some of the image can be cropped depending on background-position. It neither distorts the image nor leaves it permanently at its intrinsic size. Repetition is controlled separately by background-repeat. contain would preserve the whole image while potentially leaving uncovered space, which is different from cover.",
      "id": "web-121"
    },
    {
      "chapter": "html-forms",
      "type": "multiple",
      "question": "Which three of these are valid HTML input types? Choose three.",
      "options": [
        "number",
        "dropdown",
        "tel",
        "color",
        "label"
      ],
      "correct": [
        0,
        2,
        3
      ],
      "explanation": "number, tel, and color are standard input type keywords for numeric entry, telephone-number entry, and color selection respectively. Their user interfaces vary by browser. dropdown is not an input type; a restricted list normally uses select and option. label is an HTML element used to identify a form control, not an input type. Validity of a type keyword is separate from whether a browser supplies a specialized picker or applies extra validation.",
      "id": "web-122"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which function repeatedly runs a callback at a requested time interval?",
      "options": [
        "setInterval()",
        "delay()",
        "transition()",
        "frameRate()"
      ],
      "correct": 0,
      "explanation": "setInterval requests repeated invocation of a callback at the given interval and returns an identifier that clearInterval can cancel. Actual timing can be delayed by a busy event loop, background throttling, or nested-timer rules, so it is not an exact frame-rate guarantee. delay, transition, and frameRate are not the standard global repeating-timer function. CSS transitions animate property changes but do not act as this general-purpose JavaScript callback scheduler.",
      "id": "web-123"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which pattern validates one or more ASCII digits?",
      "options": [
        "pattern=\"[0-9]+\"",
        "pattern=\"digits\"",
        "pattern=\"numeric-range\"",
        "pattern=\"{0-9}\""
      ],
      "correct": 0,
      "explanation": "[0-9]+ matches one or more ASCII digits, and HTML pattern validation checks the whole nonempty value. The literal word digits matches that word, not a digit sequence. numeric-range is also just literal text, and {0-9} is not a character-class expression for digits. The pattern does not allow signs, decimal points, or spaces. Add required when an empty input must be rejected too, because an optional empty control does not fail pattern validation.",
      "id": "web-124"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which combination creates a flex row and puts equal free space between adjacent items?",
      "options": [
        "display:flex; justify-content:space-between;",
        "display:block; margin:auto;",
        "display:inline-block; text-align:center;",
        "display:grid; grid-template-columns:auto;"
      ],
      "correct": 0,
      "explanation": "display:flex creates the flex container, whose default direction is row; justify-content:space-between distributes positive remaining space into equal gaps between adjacent items, leaving the outer items at the ends. The block/margin and inline-block/text-align alternatives do not establish that flex distribution. The grid alternative establishes Grid rather than the requested flex row and does not request space-between. There must be free space to distribute; if items fill or overflow the line, equal additional gaps are not guaranteed.",
      "id": "web-125"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which property replaces an element’s contents with plain text?",
      "options": [
        "textContent",
        "setValue",
        "modifyText",
        "innerCode"
      ],
      "correct": 0,
      "explanation": "Assign textContent to replace an element’s child content with plain text. Characters such as angle brackets are treated as text rather than parsed into HTML elements, making it appropriate for untrusted text output. setValue, modifyText, and innerCode are not the standard DOM property for this operation. A form control’s value is a separate concept from an arbitrary element’s text content; the question asks about element contents, not the editable value of an input.",
      "id": "web-126"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which four are standard event-handler property names? Choose four.",
      "options": [
        "onhover",
        "onkeypress",
        "triggerEvent",
        "onfocus",
        "onsubmit",
        "onresize"
      ],
      "correct": [
        1,
        3,
        4,
        5
      ],
      "explanation": "onkeypress, onfocus, onsubmit, and onresize are recognized handler property names in their applicable contexts. keypress is a legacy/deprecated keyboard event; keydown or input is usually preferable for new code. onhover is not a standard DOM event-handler property, and triggerEvent is not one either. Not every listed event originates on every element: for example, resize is normally handled on the window, while submit belongs to form submission. Their applicability does not change their standard names.",
      "id": "web-127"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which declaration makes an image 40% transparent?",
      "options": [
        "opacity:0.6;",
        "visibility:hidden;",
        "opacity:0.4;",
        "filter:blur(40%);"
      ],
      "correct": 0,
      "explanation": "40% transparent means 60% opaque, so opacity:0.6 is correct. opacity:0.4 would instead make the image 60% transparent. visibility:hidden makes the element invisible rather than partially transparent. blur is a sharpness filter, not a transparency control, and blur(40%) is invalid because its argument must be a length. Opacity changes rendering without removing the element’s normal layout space.",
      "id": "web-128"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two statements describe this grid-template declaration? Choose two.",
      "options": [
        "It defines two columns and two rows",
        "The second row is automatically sized",
        "The first column has twice the fraction of the second",
        "It defines three rows and two columns"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "The portion before the slash defines two rows, 150px and auto; the portion after defines two columns, 1fr and 2fr. Thus the layout has two rows and two columns, and the second row is automatically sized. The first column receives one fraction while the second receives two, not the other way round. Minimum-content constraints can complicate final widths, but cannot make the declaration mean three rows. The slash separates row sizing from column sizing.",
      "code": "grid-template: 150px auto / 1fr 2fr;",
      "id": "web-129"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the code to fill the circle pure red.",
      "dragItems": [
        {
          "id": "i1",
          "text": "fillStyle"
        },
        {
          "id": "i2",
          "text": "paintStyle"
        },
        {
          "id": "i3",
          "text": "#FF0000"
        },
        {
          "id": "i4",
          "text": "#0000FF"
        },
        {
          "id": "i5",
          "text": "fill()"
        },
        {
          "id": "i6",
          "text": "stroke()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "fillStyle selects the fill paint, #FF0000 is pure red, and fill() paints the interior of the path. The arc is centered at (100,100), has radius 50, and sweeps from 0 to 2π, so it forms a complete circle. paintStyle is not the relevant context property, and #0000FF is blue rather than red. stroke() would paint the outline instead of the requested filled disk. beginPath avoids incorporating earlier paths into this fill.",
      "code": "ctx.beginPath();\nctx.arc(100,100,50,0,Math.PI*2);\nctx.[1] = \"[2]\";\nctx.[3];",
      "id": "web-130"
    },
    {
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Order the code to draw a line from (50,50) to (200,50).",
      "dragItems": [
        {
          "id": "i1",
          "text": "ctx.stroke();"
        },
        {
          "id": "i2",
          "text": "const canvas = document.getElementById(\"canvasArea\");"
        },
        {
          "id": "i3",
          "text": "ctx.moveTo(50,50);"
        },
        {
          "id": "i4",
          "text": "ctx.lineTo(200,50);"
        },
        {
          "id": "i5",
          "text": "const ctx = canvas.getContext(\"2d\");"
        },
        {
          "id": "i6",
          "text": "ctx.beginPath();"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "Line 4",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Line 5",
          "correctItemId": "i4"
        },
        {
          "id": "z6",
          "label": "Line 6",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Select canvasArea first, obtain its 2D context second, and call beginPath third. moveTo(50,50) establishes the start; lineTo(200,50) adds a horizontal segment because y remains 50 while x increases by 150. stroke() finally paints it. The first two statements establish the references needed by later statements. Starting a fresh path avoids repainting earlier subpaths, while stroking before adding the line would not draw the requested segment.",
      "id": "web-131"
    },
    {
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Match each SVG filter primitive to its role.",
      "dragItems": [
        {
          "id": "i1",
          "text": "feOffset"
        },
        {
          "id": "i2",
          "text": "feGaussianBlur"
        },
        {
          "id": "i3",
          "text": "feComponentTransfer"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blurs its input",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Can remap color components for brightness or contrast",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Translates its input on the X/Y axes",
          "correctItemId": "i1"
        }
      ],
      "explanation": "feGaussianBlur blurs its input according to the specified standard deviation. feComponentTransfer remaps individual color and alpha components using transfer functions; suitable slope/intercept or other mappings can adjust brightness and contrast. feOffset translates an input along x and y using dx and dy. Translation is not blur, and component remapping is not a geometric shift, so the three roles are distinct even when combined within a single SVG filter.",
      "id": "web-132"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A serif/sans-serif label alone guarantees which font is most readable on every screen.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Line height should always be smaller than font size.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Too many competing font styles can reduce readability.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "The first statement is No: serif versus sans-serif alone cannot guarantee readability on every screen; size, weight, spacing, rendering, and reader needs all matter. The second is No: line-height often benefits from being larger than font-size, and an always-smaller rule can cause crowding or overlap. The third is Yes: too many competing font styles can weaken hierarchy and make reading harder. These are context-sensitive typography principles, not universal claims that one font category is always best.",
      "id": "web-133"
    },
    {
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "Rotate the div with id funFact by 30deg in 2D.",
      "dragItems": [
        {
          "id": "i1",
          "text": "rotate(30deg)"
        },
        {
          "id": "i2",
          "text": "rotateY(30deg)"
        },
        {
          "id": "i3",
          "text": "#funFact"
        },
        {
          "id": "i4",
          "text": ".funFact"
        },
        {
          "id": "i5",
          "text": "skewX(30deg)"
        },
        {
          "id": "i6",
          "text": "rotateX(30deg)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Selector",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Transform",
          "correctItemId": "i1"
        }
      ],
      "explanation": "The completed selector is div#funFact and the transform is rotate(30deg). The hash selects the stated id, while a dot would select a class instead. rotate performs the requested rotation in the 2D plane. rotateX and rotateY rotate around axes in 3D space, changing orientation through depth rather than performing the requested planar turn. skewX shears or slants the shape instead of rotating it rigidly.",
      "code": "div[1] { transform: [2]; }",
      "id": "web-134"
    },
    {
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "Convert images in bwEffect to full grayscale.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grayscale"
        },
        {
          "id": "i2",
          "text": "filter"
        },
        {
          "id": "i3",
          "text": "contrast"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Property",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Function",
          "correctItemId": "i1"
        }
      ],
      "explanation": "The declaration is filter: grayscale(100%). filter accepts the image-processing function list, and grayscale at 100% removes all chromatic saturation while preserving shades of gray. contrast changes tonal separation and does not necessarily remove colors. It also is not a substitute for the filter property. The class selector .bwEffect applies to elements carrying that class; applying this filter to an image produces grayscale rather than a strict two-tone threshold image.",
      "code": ".bwEffect { [1]: [2](100%); }",
      "id": "web-135"
    },
    {
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match the input types to their uses.",
      "dragItems": [
        {
          "id": "i1",
          "text": "email"
        },
        {
          "id": "i2",
          "text": "text"
        },
        {
          "id": "i3",
          "text": "date"
        },
        {
          "id": "i4",
          "text": "calendar"
        },
        {
          "id": "i5",
          "text": "string"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Email address",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Default text entry",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Calendar date",
          "correctItemId": "i3"
        }
      ],
      "explanation": "email identifies an email-entry control and provides type-specific validation for nonempty values. text is the default ordinary textual input type. date represents a calendar date and may provide a browser date picker. calendar and string are not standard input type keywords, so they cannot replace the requested date and text types as conforming markup. Date display can be localized even though the underlying value uses a standardized date representation.",
      "id": "web-136"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An ordinary block box in normal flow starts on a new line.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "width and height directly size an ordinary non-replaced inline box.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A block-level element can contain inline content.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "The first statement is Yes for the stated ordinary block formatting: a block-level box begins on a new line rather than continuing within a text line. The second is No because width and height do not directly size an ordinary non-replaced inline box in the usual way; its inline content and line layout determine its dimensions. The third is Yes: block boxes commonly contain text and inline elements. This does not imply that every HTML element permits every child; content-model restrictions still apply.",
      "id": "web-137"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Choose overflow values for scroll-on-demand, clipping with programmatic scrolling still possible, and visible overflow.",
      "dragItems": [
        {
          "id": "i1",
          "text": "auto"
        },
        {
          "id": "i2",
          "text": "scroll"
        },
        {
          "id": "i3",
          "text": "expand"
        },
        {
          "id": "i4",
          "text": "hidden"
        },
        {
          "id": "i5",
          "text": "clip"
        },
        {
          "id": "i6",
          "text": "none"
        },
        {
          "id": "i7",
          "text": "visible"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "autoScroll",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "hiddenContent",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "expanded",
          "correctItemId": "i7"
        }
      ],
      "explanation": "auto matches scroll-on-demand: the box gains user scrolling when content overflows. hidden clips overflow without visible scrollbars while still allowing programmatic scrolling. visible allows overflow to paint outside the box. scroll would request scrollbars even without overflow, so it is not the on-demand choice. clip differs from hidden because it prohibits scrolling rather than retaining a scroll container. expand and none are not valid overflow values for these roles.",
      "id": "web-138"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the query for a light-gray background at widths up to 480px.",
      "dragItems": [
        {
          "id": "i1",
          "text": "media"
        },
        {
          "id": "i2",
          "text": "(max-width:480px)"
        },
        {
          "id": "i3",
          "text": "min-width:480px"
        },
        {
          "id": "i4",
          "text": "max-width:480px"
        },
        {
          "id": "i5",
          "text": "(min-width:480px)"
        },
        {
          "id": "i6",
          "text": "screen"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Rule keyword",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Media type",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Condition",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Use media, screen, and (max-width:480px), producing @media only screen and (max-width:480px). The max-width comparison includes the endpoint and all narrower viewports in CSS pixels. A min-width test would target wider viewports instead. The media feature must be parenthesized here; bare min-width:480px or max-width:480px does not fit the shown syntax. lightgray is applied only when this query matches and the cascade does not override it.",
      "code": "@[1] only [2] and [3] { body { background-color:lightgray; } }",
      "id": "web-139"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Assume the other items stay 150px wide and no item can shrink. Set box3 to 300px.",
      "dragItems": [
        {
          "id": "i1",
          "text": "class"
        },
        {
          "id": "i2",
          "text": "style"
        },
        {
          "id": "i3",
          "text": "id"
        },
        {
          "id": "i4",
          "text": "flex-grow:2"
        },
        {
          "id": "i5",
          "text": "width:300px"
        },
        {
          "id": "i6",
          "text": "flex-shrink:2"
        },
        {
          "id": "i7",
          "text": "flex-basis:2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Attribute",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Declaration",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Use the style attribute and width:300px. With flex-basis:auto and the stated no-shrinking condition, that width supplies the intended 300px size for box3 in the simple example. flex-grow:2 specifies a share of positive free space, not a fixed width. flex-shrink:2 permits shrinking rather than setting a size. flex-basis:2 lacks a length unit for this nonzero value. class and id identify elements; they do not directly contain the shown CSS declaration list.",
      "code": "<div style=\"display:flex\">\n <div style=\"width:150px; flex-shrink:0\">box1</div>\n <div style=\"width:150px; flex-shrink:0\">box2</div>\n <div [1]=\"flex-shrink:0; [2]\">box3</div>\n</div>",
      "id": "web-140"
    },
    {
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Create columns of 150px, 300px and the remaining free space, using an explicit fractional track.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid"
        },
        {
          "id": "i2",
          "text": "flex"
        },
        {
          "id": "i3",
          "text": "grid-template-columns"
        },
        {
          "id": "i4",
          "text": "1fr"
        },
        {
          "id": "i5",
          "text": "auto"
        },
        {
          "id": "i6",
          "text": "grid-template-rows"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display value",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Property",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Third track",
          "correctItemId": "i4"
        }
      ],
      "explanation": "The blanks are grid, grid-template-columns, and 1fr. They establish Grid and define tracks of 150px, 300px, and one fractional share of the remaining space. flex would enable a different layout model, and grid-template-rows would size rows rather than columns. auto is content-dependent and is not the explicit fractional unit requested. Intrinsic minimum sizes can still cause overflow; the declaration expresses the requested track allocation rather than guaranteeing all content fits.",
      "code": ".product-grid { display:[1]; [2]:150px 300px [3]; }",
      "id": "web-141"
    },
    {
      "chapter": "javascript",
      "type": "drag_drop",
      "question": "Match each snippet to its object-oriented concept.",
      "dragItems": [
        {
          "id": "i1",
          "text": "class Car {}"
        },
        {
          "id": "i2",
          "text": "this.color = \"red\";"
        },
        {
          "id": "i3",
          "text": "drive(speed) { return speed * 2; }"
        },
        {
          "id": "i4",
          "text": "let myCar = new Car(\"Tesla\");"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Instantiation",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Property assignment",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Method definition",
          "correctItemId": "i3"
        }
      ],
      "explanation": "new Car(\"Tesla\") constructs an instance, so it maps to instantiation. this.color = \"red\" writes an object property, so it maps to property assignment. drive(speed) { return speed * 2; } defines a callable method in a class or object-literal context. class Car {} is the unused class declaration; declaring the class is different from calling its constructor with new. The method definition specifies behavior but does not invoke it or create a separate Car instance.",
      "id": "web-142"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which two selectors return all title elements in an XML document? Choose two.",
      "options": [
        "xmlDoc.getElementsByTagName(\"title\")",
        "xmlDoc.querySelectorAll(\"title\")",
        "xmlDoc.getElementById(\"title\")"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "getElementsByTagName(\"title\") selects all matching tag-name elements, while querySelectorAll(\"title\") selects all elements matching the CSS type selector. The former collection is generally live; the latter NodeList is static. getElementById(\"title\") instead requests one element with that ID and does not select every element whose tag is title. This assumes the simple unqualified XML names shown; namespaces and XML case sensitivity matter in more elaborate documents.",
      "id": "web-143"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which two functions define 2D CSS transforms? Choose two.",
      "options": [
        "move()",
        "skew()",
        "zoom()",
        "matrix()",
        "scroll()"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "skew() supplies a two-dimensional shear, and matrix() supplies the six coefficients of a 2D affine transform. Both are standard CSS transform functions. move and scroll are not CSS transform functions; translation uses translate. zoom may be encountered as a CSS property, but zoom() is not a transform function. The question asks for function names valid in transform, not arbitrary concepts that might change the appearance or location of content.",
      "id": "web-144"
    },
    {
      "id": "web-145",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Use these explicit breakpoints for the illustrated layouts: mobile up to 480px; tablet 481–1024px; desktop 1025px and wider, with no upper bound. Select each media query.",
      "explanation": "Desktop uses min-width:1025px with no maximum, so it continues to match larger screens. Tablet uses min-width:481px together with max-width:1024px. Mobile uses max-width:480px. Those boundaries come from the explicit prompt, not from measuring the schematic wireframe. min-width:1920px would incorrectly exclude desktop widths from 1025 through 1919. At fractional viewport widths between the integer endpoints there can be small gaps; the listed queries express the stated integer breakpoint scheme.",
      "image": "assets/html5/pdf-072-responsive-wireframes.png",
      "imageAlt": "responsive wireframes",
      "dragItems": [
        {
          "id": "i1",
          "text": "@media only screen and (min-width:1025px)"
        },
        {
          "id": "i2",
          "text": "@media only screen and (min-width:481px) and (max-width:1024px)"
        },
        {
          "id": "i3",
          "text": "@media only screen and (max-width:480px)"
        },
        {
          "id": "i4",
          "text": "@media only screen and (min-width:1920px)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Desktop",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Tablet",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Mobile",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-146",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the CSS for the two-row, four-column Team Building grid shown. Use automatic-width columns and a 10px gap in both directions.",
      "explanation": "Use display:grid to establish the grid container, grid-template-columns:auto auto auto auto to create four automatically sized columns, and gap:10px to set both row and column gutters. With the eight pictured items placed normally, four columns produce two rows. flex and inline-flex do not establish Grid, and inline does not either. A single auto column or two fixed columns cannot match the four-column picture. column-gap or row-gap alone sets only one gap direction.",
      "code": ".grid-container {\n [1];\n [2];\n [3];\n padding:10px; background:#336699;\n}",
      "image": "assets/html5/pdf-066-team-grid.png",
      "imageAlt": "team grid",
      "dragItems": [
        {
          "id": "i1",
          "text": "display:inline"
        },
        {
          "id": "i2",
          "text": "display:flex"
        },
        {
          "id": "i3",
          "text": "display:grid"
        },
        {
          "id": "i4",
          "text": "display:inline-flex"
        },
        {
          "id": "i5",
          "text": "grid-template-columns:auto auto auto auto"
        },
        {
          "id": "i6",
          "text": "grid-template-columns:200px 100px"
        },
        {
          "id": "i7",
          "text": "grid-template-columns:auto"
        },
        {
          "id": "i8",
          "text": "gap:10px"
        },
        {
          "id": "i9",
          "text": "column-gap:10px"
        },
        {
          "id": "i10",
          "text": "row-gap:10px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Container display",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Column definition",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Both row and column gaps",
          "correctItemId": "i8"
        }
      ]
    },
    {
      "id": "web-147",
      "chapter": "html-forms",
      "type": "single",
      "question": "For the shown ordinary text input with maxlength=\"9\", what normally happens when the user types or pastes a tenth character?",
      "options": [
        "A length error must appear only at submission",
        "The control prevents user entry beyond nine characters",
        "A length error must appear when focus leaves",
        "A mandatory alert appears after each keypress"
      ],
      "correct": 1,
      "explanation": "For ordinary interactive editing, maxlength=\"9\" prevents entry beyond nine characters, commonly truncating a paste to fit. The screenshot also has minlength=\"5\", which is a separate lower-length validation constraint. maxlength does not require an alert after each keypress or a special focus-loss message, so those answers are wrong. Programmatic assignment can behave differently from user editing, and native messages vary by browser. The question specifically asks about normal typing or pasting, not arbitrary script-written values.",
      "image": "assets/html5/pdf-051-postalcode-form.png",
      "imageAlt": "postalcode form"
    },
    {
      "id": "web-148",
      "chapter": "css-layout",
      "type": "single",
      "question": "How does background-size:cover size a background image?",
      "options": [
        "It always preserves the native pixel size",
        "It resizes the container",
        "It guarantees the entire image is visible",
        "It covers the entire background area while preserving aspect ratio; part may be cropped"
      ],
      "correct": 3,
      "explanation": "background-size:cover uniformly scales the background image until its positioning area is covered in both dimensions. Preserving aspect ratio can push part of the scaled image beyond the area, so cropping is possible. It does not preserve native pixel size in all cases, resize the container, or guarantee every part of the image remains visible. contain is the common alternative for fitting the entire image inside an area, but can leave uncovered space.",
      "image": "assets/html5/pdf-052-background-cover.png",
      "imageAlt": "background cover"
    },
    {
      "id": "web-149",
      "chapter": "html-forms",
      "type": "single",
      "question": "The telephone input shown uses pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" and no maxlength. What happens if a user submits a nonempty value containing ten unseparated digits?",
      "options": [
        "Typing is blocked after nine digits",
        "Native validation normally rejects the value on submission",
        "Extra digits are silently deleted",
        "The pattern is ignored for all tel inputs"
      ],
      "correct": 1,
      "explanation": "The explicitly stated telephone pattern requires three digits, a hyphen, three digits, another hyphen, and four digits. Ten unseparated digits therefore fail pattern validation during ordinary interactive submission even though the digit count is ten. pattern is a validation rule, not a keystroke mask or truncation instruction, and it applies to tel inputs. No maxlength is given to limit entry. The supplied image depicts a different secret-code form, so it cannot provide evidence about this telephone field; the conflicting image has been removed."
    },
    {
      "id": "web-150",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Execution pauses before the numbered blank lines 26, 29 and 32 in the screenshot. How many entries are in groceries at each pause?",
      "explanation": "Before line 26, addVegetables has copied five vegetable entries into the initially empty groceries array, so its length is 5. fruits.shift() earlier removed Apples from fruits, not groceries. Line 27 removes one grocery, leaving 4; line 28 concatenates the four remaining fruits, producing 8 before line 29. Lines 30 and 31 each remove one grocery using pop and shift, leaving 6 before line 32. addOther runs later, so its two pushes must not be counted at these pauses. The other counts confuse different arrays or later operations.",
      "image": "assets/html5/pdf-065-groceries-debug.png",
      "imageAlt": "groceries debug",
      "dragItems": [
        {
          "id": "i1",
          "text": "0"
        },
        {
          "id": "i2",
          "text": "4"
        },
        {
          "id": "i3",
          "text": "5"
        },
        {
          "id": "i4",
          "text": "6"
        },
        {
          "id": "i5",
          "text": "8"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Before line 26",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Before line 29",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Before line 32",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "web-151",
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Identify the filters in the three stacked images, from top to bottom. The unfiltered source corresponds to the full-color bottom image.",
      "explanation": "The top image has a brown photographic tint, matching sepia(100%), not grayscale’s neutral tones. The middle image is washed toward the white background, matching opacity(30%) compositing. Given the stated unfiltered full-color bottom source, saturate(100%) preserves its original saturation, so it matches the bottom image rather than intensifying it. A drop shadow would add a displaced shadow around the contour and does not explain these color/alpha changes. Pixel appearance alone would not determine an exact opacity without the supplied choices and source context.",
      "image": "assets/html5/pdf-067-image-filters.png",
      "imageAlt": "image filters",
      "dragItems": [
        {
          "id": "i1",
          "text": "sepia(100%)"
        },
        {
          "id": "i2",
          "text": "opacity(30%)"
        },
        {
          "id": "i3",
          "text": "saturate(100%)"
        },
        {
          "id": "i4",
          "text": "grayscale(100%)"
        },
        {
          "id": "i5",
          "text": "drop-shadow(8px 8px 10px black)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Top image",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Middle image",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Bottom image",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-152",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the SVG element names and endpoint for the white details of the cube logo.",
      "explanation": "ellipse matches cx, cy, rx, and ry, giving center (200,100) with horizontal radius 20 and vertical radius 10. Both diagonal segments use line because their endpoints are expressed as x1/y1 and x2/y2. The second diagonal must end at (350,100), the upper-right corner shown, so select x2=\"350\" y2=\"100\". (50,100) would duplicate the first diagonal and (200,170) would lead to the center junction instead. circle uses one r, while rect, polygon, path, and polyline use different geometry attributes.",
      "code": "<[1] cx=\"200\" cy=\"100\" rx=\"20\" ry=\"10\" fill=\"white\" />\n<[2] x1=\"200\" y1=\"365\" x2=\"50\" y2=\"100\" stroke=\"white\" />\n<[3] x1=\"200\" y1=\"365\" [4] stroke=\"white\" />",
      "image": "assets/html5/pdf-073-svg-cube.png",
      "imageAlt": "svg cube",
      "dragItems": [
        {
          "id": "i1",
          "text": "circle"
        },
        {
          "id": "i2",
          "text": "ellipse"
        },
        {
          "id": "i3",
          "text": "polygon"
        },
        {
          "id": "i4",
          "text": "rect"
        },
        {
          "id": "i5",
          "text": "line"
        },
        {
          "id": "i6",
          "text": "path"
        },
        {
          "id": "i7",
          "text": "polyline"
        },
        {
          "id": "i8",
          "text": "x2=\"50\" y2=\"100\""
        },
        {
          "id": "i9",
          "text": "x2=\"350\" y2=\"100\""
        },
        {
          "id": "i10",
          "text": "x2=\"200\" y2=\"170\""
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Oval element with cx, cy, rx and ry",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Element using x1/y1/x2/y2",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Element for the second diagonal",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Second diagonal endpoint",
          "correctItemId": "i9"
        }
      ]
    },
    {
      "id": "web-153",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "A development team is following the Application Lifecycle Management process. They\nhave just finished writing the code for the web application.\n\nArrange the remaining stages in the correct chronological order to complete the cycle.\nCurrent Stage: Development\nNext Stage: \nFollowing Stage: \nFinal Stage:",
      "explanation": "After Development, Test checks the implementation against requirements and identifies defects. Deploy then publishes the validated application to its target environment. Maintain is the ongoing stage for monitoring, fixes, and updates after release. Design and Plan establish the solution and goals before the development stage, so neither belongs in these three remaining slots. This is the simplified sequential ALM cycle used by the question, not a restriction against iteration in real teams.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Test"
        },
        {
          "id": "i2",
          "text": "Deploy"
        },
        {
          "id": "i3",
          "text": "Maintain"
        },
        {
          "id": "i4",
          "text": "Design"
        },
        {
          "id": "i5",
          "text": "Plan"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Next after development",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Following stage",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Ongoing final stage",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-154",
      "chapter": "html-forms",
      "type": "single",
      "question": "A developer wants to move an HTML element 50 pixels to the right and 20 pixels down\nfrom its original position using CSS. Which property and function combination achieves\nthis 2D transformation?",
      "explanation": "transform:translate(50px,20px) moves the rendered element 50 CSS pixels along x and 20 along y, which is right and down under the ordinary coordinate system. It does not reserve a new normal-flow position for neighboring elements. position:move is not valid CSS positioning syntax. skew uses angles and shears rather than translating, so pixel arguments are inappropriate. transition controls interpolation of property changes and has no offset function that performs this translation.",
      "options": [
        "transform: translate(50px, 20px);",
        "position: move(50px, 20px);",
        "transform: skew(50px, 20px);",
        "transition: offset(50px, 20px);"
      ],
      "correct": 0
    },
    {
      "id": "web-155",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are creating a CSS animation that continuously rotates a loading icon. Complete\nthe code to define the keyframes and apply the animation property.\n\n\n[1]\n spin {\nfrom { transform: rotate(0deg); }\nto { transform: rotate(360deg); }\n}\n.icon {\n\n[2]\n: spin 2s linear infinite;\n}",
      "explanation": "Blank [1] is @keyframes, which defines the named spin sequence from 0deg to 360deg. Blank [2] is animation, producing animation:spin 2s linear infinite: one revolution lasts two seconds, the timing is uniform, and iterations repeat indefinitely. @media is conditional styling and @font-face declares a downloadable font; @animation is not the defining at-rule. transform applies geometry but cannot accept this animation shorthand, transition needs property changes rather than these named keyframes, and filter processes rendered appearance.",
      "dragItems": [
        {
          "id": "i1",
          "text": "@media"
        },
        {
          "id": "i2",
          "text": "@keyframes"
        },
        {
          "id": "i3",
          "text": "@animation"
        },
        {
          "id": "i4",
          "text": "@font-face"
        },
        {
          "id": "i5",
          "text": "animation"
        },
        {
          "id": "i6",
          "text": "transform"
        },
        {
          "id": "i7",
          "text": "transition"
        },
        {
          "id": "i8",
          "text": "filter"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-156",
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "A designer wants to apply specific visual filters to images on a gallery page. Match\nthe CSS filter function to the effect it produces.\n\nMakes the image appear in black and white: \nAdds a shadow behind the image contour: \nMakes the image partially transparent:",
      "explanation": "grayscale(100%) removes color saturation, producing grayscale rather than a strict thresholded two-color image. drop-shadow(5px 5px 5px #000) creates a black shadow displaced right and down following the rendered alpha contour. opacity(50%) makes the result half opaque. blur(5px) softens detail and does not perform any of those three exact tasks. saturate(200%) increases saturation instead of removing it or changing alpha, so it is unused.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grayscale(100%)"
        },
        {
          "id": "i2",
          "text": "drop-shadow(5px 5px 5px #000)"
        },
        {
          "id": "i3",
          "text": "opacity(50%)"
        },
        {
          "id": "i4",
          "text": "blur(5px)"
        },
        {
          "id": "i5",
          "text": "saturate(200%)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Makes the image appear in black and white:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Adds a shadow behind the image contour:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Makes the image partially transparent:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-157",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Indicate whether each statement regarding Web Open Font Format (WOFF) and\ntypography is True or False.",
      "explanation": "Yes: WOFF packages font data for web delivery and supports compression, reducing transfer size relative to equivalent uncompressed font data. Yes: font-family accepts an ordered fallback list so another available family can be used if the preferred one is unavailable. No: WOFF is not limited to desktop browsers; modern mobile browsers support web fonts too. A fallback declaration is still useful because downloading can fail, coverage can be incomplete, or browser policy can block a font.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "WOFF is a font format used in web pages that supports compression to reduce load times.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The CSS 'font-family' property allows you to specify a list of backup fonts in case the primary font fails to load.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "WOFF files can only be used on desktop browsers and are not supported on mobile devices.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "web-158",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer is creating a vector graphic using the HTML5 SVG element. Complete the\ncode to draw a red circle with a radius of 40 pixels.",
      "explanation": "Select circle for the SVG element and r for its radius attribute. The result has center (50,50), radius 40 user units, and a red fill; in the simple untransformed SVG coordinate system those units correspond to CSS pixels. line and rect use different geometry attributes, while ellipse needs rx and ry rather than one r. u, f, and b are not the circle-radius attribute. cx and cy locate the center rather than specifying its diameter.",
      "dragItems": [
        {
          "id": "i1",
          "text": "line"
        },
        {
          "id": "i2",
          "text": "rect"
        },
        {
          "id": "i3",
          "text": "circle"
        },
        {
          "id": "i4",
          "text": "ellipse"
        },
        {
          "id": "i5",
          "text": "u"
        },
        {
          "id": "i6",
          "text": "r"
        },
        {
          "id": "i7",
          "text": "f"
        },
        {
          "id": "i8",
          "text": "b"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<svg>\n  <[1] cx=\"50\" cy=\"50\" [2]=\"40\" fill=\"red\" />\n</svg>"
    },
    {
      "id": "web-159",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer needs to draw a straight red line using SVG. The line must start at coordinates (10, 10) and end at coordinates (50, 50).",
      "explanation": "The four blanks are x1, y1, x2, and y2 in that order, giving a start at (10,10) and an end at (50,50). The numbered suffix distinguishes the first endpoint from the second, while x versus y distinguishes horizontal from vertical coordinates. Reusing an attribute instead would duplicate one coordinate and omit another. The stroke=\"red\" paints the segment red; a line has no filled interior. Equal x/y changes produce a diagonal toward the lower right under ordinary SVG axes.",
      "dragItems": [
        {
          "id": "i1",
          "text": "y2"
        },
        {
          "id": "i2",
          "text": "x1"
        },
        {
          "id": "i3",
          "text": "y1"
        },
        {
          "id": "i4",
          "text": "x2"
        },
        {
          "id": "i5",
          "text": "y1"
        },
        {
          "id": "i6",
          "text": "x1"
        },
        {
          "id": "i7",
          "text": "x2"
        },
        {
          "id": "i8",
          "text": "y2"
        },
        {
          "id": "i9",
          "text": "x1"
        },
        {
          "id": "i10",
          "text": "y1"
        },
        {
          "id": "i11",
          "text": "y2"
        },
        {
          "id": "i12",
          "text": "x2"
        },
        {
          "id": "i13",
          "text": "y1"
        },
        {
          "id": "i14",
          "text": "x2"
        },
        {
          "id": "i15",
          "text": "y2"
        },
        {
          "id": "i16",
          "text": "x1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i15",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ],
      "code": "<svg>\n  <line [1]=\"10\" [2]=\"10\" [3]=\"50\" [4]=\"50\" stroke=\"red\" />\n</svg>"
    },
    {
      "id": "web-160",
      "chapter": "lifecycle",
      "type": "dropdown",
      "question": "A webpage requires a visual gauge to display the current disk usage, which is at 60%.\nSelect the appropriate HTML5 tag and attributes to represent this scalar measurement\nwithin a known range.\n\n<\n[1]\n min=\"0\" max=\"100\" \n[2]\n=\"60\">60%\n[3]\n>",
      "explanation": "Use meter, value, and </meter, with the final > already provided by the question. The result represents a scalar reading of 60 within bounds 0 and 100, so 60% disk usage is appropriate. progress instead describes task completion, output describes a result, and input is an editable control. checked, selected, and disabled are not the numeric reading attribute. The closing tag must match meter; the candidate intentionally omits > because the surrounding template supplies it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "meter"
        },
        {
          "id": "i2",
          "text": "progress"
        },
        {
          "id": "i3",
          "text": "output"
        },
        {
          "id": "i4",
          "text": "input"
        },
        {
          "id": "i5",
          "text": "checked"
        },
        {
          "id": "i6",
          "text": "selected"
        },
        {
          "id": "i7",
          "text": "disabled"
        },
        {
          "id": "i8",
          "text": "value"
        },
        {
          "id": "i9",
          "text": "</input>"
        },
        {
          "id": "i10",
          "text": "</option>"
        },
        {
          "id": "i11",
          "text": "</meter"
        },
        {
          "id": "i12",
          "text": "<meter"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-161",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "A developer wants to group related elements in a form (e.g., \"Shipping Address\") and\nprovide a caption for that group.\n\nMatch the HTML tags to their correct purpose.\n\nContainer for grouping related form data: \nCaption/Title for the grouped elements:",
      "explanation": "fieldset is the form-specific container for related controls, and legend supplies that group’s caption, such as Shipping Address. caption labels a table rather than a fieldset. section is a general document section and is not the dedicated form-group element. group is not the standard HTML element for this purpose. Combining fieldset with legend conveys the relationship semantically and accessibly rather than merely drawing a visual border around unrelated inputs.",
      "dragItems": [
        {
          "id": "i1",
          "text": "fieldset"
        },
        {
          "id": "i2",
          "text": "legend"
        },
        {
          "id": "i3",
          "text": "group"
        },
        {
          "id": "i4",
          "text": "caption"
        },
        {
          "id": "i5",
          "text": "section"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Container for grouping related form data:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Caption/Title for the grouped elements:",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-162",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You need to provide an input field where users can type their favorite fruit, but\nalso see a list of suggested options. Complete the markup to link the input field to the\npre-defined list.",
      "explanation": "Set list=\"fruitList\" on the input and use datalist id=\"fruitList\" for the options. Matching those values links the editable field to its suggestions. id would name the input itself, name controls submitted data, and for belongs to association mechanisms such as label rather than this suggestion link. select would create a separate restricted choice control. option is one suggested item and optgroup groups options; neither replaces the datalist container.",
      "dragItems": [
        {
          "id": "i1",
          "text": "id"
        },
        {
          "id": "i2",
          "text": "for"
        },
        {
          "id": "i3",
          "text": "list"
        },
        {
          "id": "i4",
          "text": "name"
        },
        {
          "id": "i5",
          "text": "option"
        },
        {
          "id": "i6",
          "text": "datalist"
        },
        {
          "id": "i7",
          "text": "select"
        },
        {
          "id": "i8",
          "text": "optgroup"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<input [1]=\"fruitList\" name=\"fruit\" />\n<[2] id=\"fruitList\">\n  <option value=\"Apple\">\n  <option value=\"Pear\">\n</datalist>"
    },
    {
      "id": "web-163",
      "chapter": "html-forms",
      "type": "single",
      "question": "A developer needs to validate a form field to ensure the user enters a product code\nconsisting of exactly 3 uppercase letters followed by 4 digits (e.g., ABC1234). Which\nattribute and value should be applied to the input element?",
      "explanation": "pattern=\"[A-Z]{3}[0-9]{4}\" matches exactly three uppercase ASCII letters followed immediately by four digits. HTML pattern validation applies to the whole nonempty value, so ABC1234 fits and an extra separator does not. The hyphenated pattern would require ABC-1234 instead. validate=\"uppercase-digits\" is not a native validation rule, and text-code is not a standard input type. Use required too if the user must not leave this control empty; pattern alone does not impose that requirement.",
      "options": [
        "pattern=\"[A-Z]{3}[0-9]{4}\"",
        "pattern=\"[A-Z]{3}-[0-9]{4}\"",
        "validate=\"uppercase-digits\"",
        "type=\"text-code\""
      ],
      "correct": 0
    },
    {
      "id": "web-164",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match the input attribute to the validation behavior it enforces.\n\nEnsures the field is not left empty before submission: \nSpecifies the minimum and maximum numeric values allowed: \nChecks if the entered text matches an email format:",
      "explanation": "required prevents an empty submission for supported controls. min and max specify lower and upper values for applicable numeric or date-related types. type=\"email\" enables the native email-like format check for nonempty values. pattern can define an explicit regular expression but is not the direct built-in email-type answer. step restricts permitted increments relative to the step base rather than setting the minimum and maximum pair. These checks validate syntax/ranges, not the existence of an email account.",
      "dragItems": [
        {
          "id": "i1",
          "text": "required"
        },
        {
          "id": "i2",
          "text": "min/max"
        },
        {
          "id": "i3",
          "text": "type=\"email\""
        },
        {
          "id": "i4",
          "text": "pattern"
        },
        {
          "id": "i5",
          "text": "step"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Prevent empty submission",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Numeric lower and upper bounds",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Check email-like format",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-165",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are creating a calculator that sums two numbers and displays the result\nimmediately without reloading the page. Complete the markup using the semantic output\nelement.\n\n<form oninput=\"result.value=parseInt(a.value)+parseInt(b.value)\">\n<input type=\"number\" id=\"a\" value=\"0\"> +\n<input type=\"number\" id=\"b\" value=\"0\"> =\n<\n[1]\n name=\"result\" \n[2]\n=\"a b\">0\n[3]\n>",
      "explanation": "Use output, for, and </output, with the final > supplied by the template. The output element semantically displays the calculation result, and for=\"a b\" associates it with the two input IDs. meter is a bounded scalar gauge, progress represents completion, and input is a control rather than this result element. name gives the output its handler reference but does not replace for; id and list do not express these input associations. The handler recalculates on input, and parseInt means decimal fractions would be truncated rather than summed precisely.",
      "dragItems": [
        {
          "id": "i1",
          "text": "meter"
        },
        {
          "id": "i2",
          "text": "progress"
        },
        {
          "id": "i3",
          "text": "input"
        },
        {
          "id": "i4",
          "text": "output"
        },
        {
          "id": "i5",
          "text": "name"
        },
        {
          "id": "i6",
          "text": "id"
        },
        {
          "id": "i7",
          "text": "for"
        },
        {
          "id": "i8",
          "text": "list"
        },
        {
          "id": "i9",
          "text": "</option>"
        },
        {
          "id": "i10",
          "text": "</output"
        },
        {
          "id": "i11",
          "text": "<output"
        },
        {
          "id": "i12",
          "text": "</input>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-166",
      "chapter": "css-layout",
      "type": "single",
      "question": "In CSS positioning, what happens when an element is assigned position: absolute;?",
      "explanation": "Absolute positioning removes the element from normal flow so other boxes do not reserve its original space. The intended answer describes its common containing block: the nearest positioned ancestor. More precisely, other properties such as transforms can also establish the containing block, and the initial containing block is the fallback. Remaining in flow while being offset describes relative positioning. Always using the viewport resembles a simplified fixed-position model, and floating left or right is a different layout mechanism.",
      "options": [
        "It is removed from the normal document flow and positioned relative to its nearest positioned ancestor.",
        "It remains in the normal flow but is shifted relative to its original position.",
        "It is always positioned relative to the browser viewport, regardless of scrolling.",
        "It floats to the left or right of its container text."
      ],
      "correct": 0
    },
    {
      "id": "web-167",
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Match each overflow value to its behavior for a fixed-size text container. For the scrolling case, request scrollbars even when all text fits; actual scrollbar visibility can depend on platform overlay settings.\n\n1. Clip text without user scrollbars.\n2. Always request scrollbars, including when content fits.\n3. Allow content to paint outside the box.",
      "explanation": "hidden clips overflow without presenting user scrollbars, although programmatic scrolling can remain possible. scroll explicitly requests scrollbars even when the content fits, satisfying the clarified second requirement; operating systems with overlay scrollbars can still hide their visual tracks until interaction. visible allows content to paint outside the box and potentially overlap other content. auto is the distractor because it requests user scrolling only when overflow requires it, not for content that fits. The distinctions concern CSS behavior rather than a guarantee that every platform continuously displays scrollbar graphics.",
      "dragItems": [
        {
          "id": "i1",
          "text": "hidden"
        },
        {
          "id": "i2",
          "text": "scroll"
        },
        {
          "id": "i3",
          "text": "visible"
        },
        {
          "id": "i4",
          "text": "auto"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Clip overflow without user scrollbars",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Request scrollbars even when content fits (platform overlay behavior may vary)",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Allow content to paint outside the box",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-168",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Assume ordinary normal block/inline formatting with default widths, not flex/grid/absolute layout. Evaluate each statement.",
      "explanation": "Under the stated ordinary formatting assumptions, all three are Yes. A normal in-flow block starts on a new line and its auto width uses available inline space. Inline boxes such as spans and anchors can share a text line with adjacent inline content. inline-block combines inline participation with a box that respects width and height. The prompt’s default-width and no-flex/grid/absolute conditions matter: explicit sizing or a different formatting context would make the word always in the first statement too broad.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Block-level elements (like <div> and <p>) always start on a new line and take up the full width available.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Inline elements (like <span> and <a>) allow other elements to sit next to them on the same line.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Changing an element's display property to display: inline-block allows it to sit on the same line as other elements while respecting width and height settings.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-169",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer wants to apply specific styles only when the device screen is 600 pixels\nwide or less. Complete the CSS media query syntax to achieve this.",
      "explanation": "The intended query is @media only screen and (max-width:600px). screen restricts it to screen media, while max-width includes viewports up to and including 600 CSS pixels. min-width selects the opposite range and width alone tests equality; device-height tests another dimension. print and speech name other media types, while all is not restricted to screens. Despite the stem’s device-screen wording, the shown width feature measures the viewport, not physical hardware screen pixels.",
      "dragItems": [
        {
          "id": "i1",
          "text": "print"
        },
        {
          "id": "i2",
          "text": "speech"
        },
        {
          "id": "i3",
          "text": "all"
        },
        {
          "id": "i4",
          "text": "screen"
        },
        {
          "id": "i5",
          "text": "width"
        },
        {
          "id": "i6",
          "text": "device-height"
        },
        {
          "id": "i7",
          "text": "max-width"
        },
        {
          "id": "i8",
          "text": "min-width"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "@media only [1] and ([2]: 600px) {\n  body { background-color: lightblue; }\n}"
    },
    {
      "id": "web-170",
      "chapter": "javascript",
      "type": "single",
      "question": "You have a flex container with the class .container. You want to center its child\nitems both vertically and horizontally within the container. Which combination of\nproperties should you use?",
      "explanation": "justify-content:center centers items along the flex main axis, and align-items:center centers them along the cross axis, producing both-axis centering in an ordinary single-line container with available space. space-between spreads items rather than clustering them at the center. align-content concerns distribution of flex lines, not the same item alignment. text-align and vertical-align are not the two-axis flex alignment pair, and setting flex-direction plus align-self does not center all children on both axes.",
      "options": [
        "justify-content: center; align-items: center;",
        "justify-content: space-between; align-content: center;",
        "text-align: center; vertical-align: middle;",
        "flex-direction: column; align-self: center;"
      ],
      "correct": 0
    },
    {
      "id": "web-171",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer is building a grid layout with three columns. The first column should be\n100px wide, the second should take up 2 fractions of the remaining space, and the third\nshould take up 1 fraction.\n\nComplete the CSS code:\n\n.grid-container {\ndisplay: grid;\ngrid-template-columns: \n[1]\n \n[2]\n \n[3]\n;\n}",
      "explanation": "The three track values are 100px, 2fr, and 1fr. They create a fixed first column and divide the flexible remainder into three shares, two for the second column and one for the third. For example, 600px of distributable remainder gives 400px and 200px before intrinsic constraints. auto uses automatic sizing rather than an explicit fraction, and swapping 1fr with 2fr reverses the requested proportions. Gaps and minimum-content sizes must still be accounted for in an actual layout.",
      "dragItems": [
        {
          "id": "i1",
          "text": "auto"
        },
        {
          "id": "i2",
          "text": "100px"
        },
        {
          "id": "i3",
          "text": "1fr"
        },
        {
          "id": "i4",
          "text": "2fr"
        },
        {
          "id": "i5",
          "text": "2fr"
        },
        {
          "id": "i6",
          "text": "100px"
        },
        {
          "id": "i7",
          "text": "1fr"
        },
        {
          "id": "i8",
          "text": "auto"
        },
        {
          "id": "i9",
          "text": "100px"
        },
        {
          "id": "i10",
          "text": "2fr"
        },
        {
          "id": "i11",
          "text": "auto"
        },
        {
          "id": "i12",
          "text": "1fr"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-172",
      "chapter": "graphics",
      "type": "single",
      "question": "Which HTML meta tag must be included in the <head> section to ensure a web page\nscales correctly on mobile devices?",
      "explanation": "The viewport meta declaration with width=device-width and initial-scale=1.0 is the standard configuration for a responsive mobile layout viewport and an initial scale of one. responsive and screen are not substitute meta names with the proposed meanings. charset declares character encoding and cannot configure viewport scaling. This tag alone does not guarantee all content fits: the page still needs responsive widths and CSS. It belongs in head as metadata rather than being a visible content element.",
      "options": [
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "<meta name=\"responsive\" content=\"true\">",
        "<meta name=\"screen\" content=\"width=mobile, scale=auto\">",
        "<meta charset=\"viewport-scale\">"
      ],
      "correct": 0
    },
    {
      "id": "web-173",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "You are styling items inside a flex container. - Item A should grow to fill available\nspace twice as fast as other items. - Item B should not shrink even if there is not\nenough space.\n\nComplete the CSS for the items:\n\n.item-a {\n\n[1]\n: 2;\n}\n.item-b {\n\n[2]\n: 0;\n}",
      "explanation": "Item A uses flex-grow:2 to receive two growth shares when comparable siblings have grow factor 1. Item B uses flex-shrink:0 to prevent negative-free-space shrinking. order changes visual sequence and flex-basis establishes the starting main size; neither sets the requested growth or shrink factors. Growth is distribution of free space, not a time speed or a guarantee of double final width. The comparison assumes the other items’ growth factors are 1; if they remain at the default 0 they do not grow at all.",
      "dragItems": [
        {
          "id": "i1",
          "text": "flex-shrink"
        },
        {
          "id": "i2",
          "text": "order"
        },
        {
          "id": "i3",
          "text": "flex-basis"
        },
        {
          "id": "i4",
          "text": "flex-grow"
        },
        {
          "id": "i5",
          "text": "order"
        },
        {
          "id": "i6",
          "text": "flex-basis"
        },
        {
          "id": "i7",
          "text": "flex-shrink"
        },
        {
          "id": "i8",
          "text": "flex-grow"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-174",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Select NUMERIC start/end grid-line numbers to span the first two columns.",
      "explanation": "Start at grid line 1 and end at line 3 to cover the first two column tracks: track one lies between lines 1 and 2, and track two between lines 2 and 3. Ending at 2 would cover only one track. Starting at 2 skips the first track, while zero is not a valid grid line number. The question explicitly requests numeric line numbers rather than an equivalent span-based shorthand.",
      "dragItems": [
        {
          "id": "i1",
          "text": "2"
        },
        {
          "id": "i2",
          "text": "3"
        },
        {
          "id": "i3",
          "text": "1"
        },
        {
          "id": "i4",
          "text": "0"
        },
        {
          "id": "i5",
          "text": "2"
        },
        {
          "id": "i6",
          "text": "3"
        },
        {
          "id": "i7",
          "text": "0"
        },
        {
          "id": "i8",
          "text": "1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".item {\n  grid-column-start: [1];\n  grid-column-end: [2];\n}"
    },
    {
      "id": "web-175",
      "chapter": "graphics",
      "type": "single",
      "question": "Which CSS longhand property specifically controls whether flex items wrap to multiple lines?",
      "explanation": "flex-wrap is the longhand that controls whether flex items stay on one line or wrap into additional lines, using nowrap, wrap, or wrap-reverse. flex-flow is a shorthand combining flex-direction and flex-wrap, so it can affect wrapping but is not the longhand requested. flex-direction sets the main-axis direction. align-content distributes multiple lines along the cross axis rather than enabling wrapping. Available space and item sizing determine when wrapping actually occurs.",
      "options": [
        "flex-wrap",
        "flex-direction",
        "flex-flow",
        "align-content"
      ],
      "correct": 0
    },
    {
      "id": "web-176",
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "A developer is using the CSS background-size property. Match the value to its\nbehavior.\n\nScales the image to the largest size such that both its width and height can fit inside\nthe content area: \nScales the background image to be as large as possible so that the background area is\ncompletely covered:",
      "explanation": "contain scales uniformly so the whole image fits within the background positioning area; unused space can remain if the aspect ratios differ. cover scales uniformly until the area is fully covered, which may crop parts of the image. auto uses intrinsic sizing/aspect-ratio rules rather than either fit policy. A one-value 100% sets the width to the area’s width with the other dimension auto; it does not universally achieve both contain and cover. The intended cover description is the smallest uniform scale that covers both dimensions, not an unlimited largest size.",
      "dragItems": [
        {
          "id": "i1",
          "text": "contain"
        },
        {
          "id": "i2",
          "text": "cover"
        },
        {
          "id": "i3",
          "text": "auto"
        },
        {
          "id": "i4",
          "text": "100%"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Fit the whole image inside the background area without cropping.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Cover the entire background area while preserving aspect ratio, allowing cropping.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-177",
      "chapter": "html-forms",
      "type": "single",
      "question": "Which 2D transformation function skews an element along the X and Y axes?",
      "explanation": "skew(x-angle,y-angle) shears the element along the x and y axes using the respective angle arguments. rotate turns the element as a rigid orientation change, scale resizes axes, and translate moves it without this slanting deformation. Those functions may be combined in a transform list but are not interchangeable. The skew arguments are angles, not displacement lengths or dimensionless scale factors, which also distinguishes its syntax from translate and scale.",
      "options": [
        "skew(x-angle, y-angle)",
        "rotate(angle)",
        "scale(x, y)",
        "translate(x, y)"
      ],
      "correct": 0
    },
    {
      "id": "web-178",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You need to group a set of radio buttons in a form and provide a caption for that\ngroup. Complete the HTML structure.\n\n<\n[1]\n>\n<\n[2]\n>Choose your shipping method:\n[3]\n>\n<input type=\"radio\" name=\"shipping\" value=\"standard\"> Standard\n<input type=\"radio\" name=\"shipping\" value=\"express\"> Express\n\n[4]\n>",
      "explanation": "The blanks open fieldset, open legend, close legend, and close fieldset. fieldset groups the related shipping controls and legend names the group. The closing-fragment choices omit the last > because the template already provides it. label names an individual control, not the whole fieldset group, while form is the larger submission container. input is void and does not use an </input> closing tag. Sharing name=\"shipping\" makes the two radios mutually exclusive independently of the semantic fieldset grouping.",
      "dragItems": [
        {
          "id": "i1",
          "text": "label"
        },
        {
          "id": "i2",
          "text": "fieldset"
        },
        {
          "id": "i3",
          "text": "legend"
        },
        {
          "id": "i4",
          "text": "form"
        },
        {
          "id": "i5",
          "text": "legend"
        },
        {
          "id": "i6",
          "text": "fieldset"
        },
        {
          "id": "i7",
          "text": "form"
        },
        {
          "id": "i8",
          "text": "label"
        },
        {
          "id": "i9",
          "text": "<legend"
        },
        {
          "id": "i10",
          "text": "</input>"
        },
        {
          "id": "i11",
          "text": "</option>"
        },
        {
          "id": "i12",
          "text": "</legend"
        },
        {
          "id": "i13",
          "text": "</input>"
        },
        {
          "id": "i14",
          "text": "</option>"
        },
        {
          "id": "i15",
          "text": "</fieldset"
        },
        {
          "id": "i16",
          "text": "<fieldset"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i15",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "web-179",
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "A developer is using CSS Grid. Match the property to its function.\n\nDefines the size of the gap between rows and columns: \nSpecifies the size of the columns in a grid container:",
      "explanation": "gap sets the gutters between rows and columns, using one value for both or two values for row and column gaps respectively. grid-template-columns defines the explicit column track sizes. grid-auto-flow instead controls the direction and packing of automatically placed items. grid-template-areas defines named layout regions rather than the sizes or gutters directly. These functions can cooperate in one grid but each property has its own role, so neither unused property replaces the requested size declarations.",
      "dragItems": [
        {
          "id": "i1",
          "text": "gap"
        },
        {
          "id": "i2",
          "text": "grid-template-columns"
        },
        {
          "id": "i3",
          "text": "grid-auto-flow"
        },
        {
          "id": "i4",
          "text": "grid-template-areas"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Defines the size of the gap between rows and columns:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Specifies the size of the columns in a grid container:",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-180",
      "chapter": "html-forms",
      "type": "single",
      "question": "Which HTML5 element allows you to specify multiple image resources for different\ndisplay scenarios (e.g., different screen widths or formats), allowing the browser to\nchoose the most appropriate one?",
      "explanation": "picture groups source alternatives and a fallback img so the browser can choose an image according to media conditions or supported formats. canvas is a scriptable drawing surface, not a declarative responsive-image source selector. img-set is not an HTML element; CSS has an image-set() function in a different context. figure groups self-contained content and an optional caption but does not itself select among image resources. The source rules and img still determine the actual fallback and rendering.",
      "options": [
        "<picture>",
        "<canvas>",
        "<img-set>",
        "<figure>"
      ],
      "correct": 0
    },
    {
      "id": "web-181",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For the first statement assume no transformed/filter ancestor establishes a different fixed-position containing block. Evaluate each statement.",
      "explanation": "The first statement is Yes under the supplied assumption: fixed positioning normally uses the viewport and stays in place as the document scrolls. The second is No because a left float is removed from normal flow and affects how surrounding inline content wraps. The third is No: z-index can also apply to flex and grid items without non-static positioning. Ancestors that establish special fixed-position containing blocks are explicitly excluded for the first statement, preventing a common overgeneralization.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Elements with position: fixed are positioned relative to the viewport and do not move when the page is scrolled.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Elements with float: left remain in the normal document flow and do not affect surrounding text.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The z-index property only works on positioned elements (relative, absolute, fixed, sticky).",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "web-182",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer wants to modify the order of flex items visually without changing the\nHTML structure. Assign the correct CSS property to change the order.",
      "explanation": "Use order in both blanks. item-2 has order:1 and therefore precedes item-1 with order:2 in order-modified flex layout, assuming they are the relevant items. flex-basis controls initial main size, flex-grow distributes extra space, and flex-shrink controls shrinking; none chooses the visual sequence. The HTML source order is unchanged, so keyboard focus and assistive-technology order should not be assumed to follow this visual reorder. Equal order values preserve source order.",
      "dragItems": [
        {
          "id": "i1",
          "text": "flex-basis"
        },
        {
          "id": "i2",
          "text": "order"
        },
        {
          "id": "i3",
          "text": "flex-grow"
        },
        {
          "id": "i4",
          "text": "flex-shrink"
        },
        {
          "id": "i5",
          "text": "order"
        },
        {
          "id": "i6",
          "text": "flex-grow"
        },
        {
          "id": "i7",
          "text": "flex-shrink"
        },
        {
          "id": "i8",
          "text": "flex-basis"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".item-1 { [1]: 2; }\n.item-2 { [2]: 1; }"
    },
    {
      "id": "web-183",
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "You want to apply a Sepia filter to an image using CSS. Complete the code.\n\nimg {\n\n[1]\n: \n[2]\n(100%);\n}",
      "explanation": "Use filter:sepia(100%). filter accepts the visual-processing function, and sepia produces the full brown-toned photographic effect. transform changes geometry, transition interpolates property changes, and animation applies a named sequence rather than accepting this filter-function value. blur softens the image, grayscale removes color, and brightness changes luminance; none creates the specific sepia tint. A 100% amount means the full sepia operation, not partial opacity.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter"
        },
        {
          "id": "i2",
          "text": "transform"
        },
        {
          "id": "i3",
          "text": "transition"
        },
        {
          "id": "i4",
          "text": "animation"
        },
        {
          "id": "i5",
          "text": "blur"
        },
        {
          "id": "i6",
          "text": "grayscale"
        },
        {
          "id": "i7",
          "text": "brightness"
        },
        {
          "id": "i8",
          "text": "sepia"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-184",
      "chapter": "lifecycle",
      "type": "single",
      "question": "During which stage of the Application Lifecycle Management (ALM) does the team define\nthe visual layout, color scheme, and user interface of the application?",
      "explanation": "Design is the stage that specifies the application’s visual layout, color scheme, and user interface. Develop implements those specifications in code. Test evaluates behavior and conformance, and Deploy publishes the build to its target environment. Although implementation and usability testing can feed back into design decisions, the primary task described belongs to Design within the simplified ALM stages offered.",
      "options": [
        "Design",
        "Develop",
        "Test",
        "Deploy"
      ],
      "correct": 0
    },
    {
      "id": "web-185",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Match the SVG concept to its description.\n\nSVG code written directly within the HTML document: \nSVG code stored in a separate file and linked via an  tag:",
      "explanation": "Inline SVG means the SVG markup is directly part of the HTML document, allowing its internal elements to participate in that DOM and be targeted by page styles and scripts. Referenced SVG here means a separate SVG file loaded through img; it remains a vector resource but its internal DOM is not exposed through that image element. Canvas API uses imperative drawing rather than SVG markup. Raster Image describes pixels and does not become the right term merely because an SVG is referenced externally.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Inline SVG"
        },
        {
          "id": "i2",
          "text": "Referenced SVG"
        },
        {
          "id": "i3",
          "text": "Canvas API"
        },
        {
          "id": "i4",
          "text": "Raster Image"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SVG markup embedded directly in the HTML document.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "An external SVG file referenced through an img element.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-186",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to provide visual feedback on a form. If an input field contains\nvalid data, it should have a green border. If it contains invalid data, it should have a\nred border.",
      "explanation": "input:invalid selects inputs failing their applicable validity constraints and receives the red border. input:valid selects inputs satisfying those constraints and receives the green border. checked selects checked radios or checkboxes, while disabled selects disabled controls; neither reports general data validity. An optional empty field can be valid, and a required empty field can already be invalid before interaction. Production feedback may need interaction-aware styling in addition to these basic pseudo-classes.",
      "dragItems": [
        {
          "id": "i1",
          "text": "checked"
        },
        {
          "id": "i2",
          "text": "invalid"
        },
        {
          "id": "i3",
          "text": "valid"
        },
        {
          "id": "i4",
          "text": "disabled"
        },
        {
          "id": "i5",
          "text": "valid"
        },
        {
          "id": "i6",
          "text": "invalid"
        },
        {
          "id": "i7",
          "text": "disabled"
        },
        {
          "id": "i8",
          "text": "checked"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "input:[1] { border: 2px solid red; }\ninput:[2] { border: 2px solid green; }"
    },
    {
      "id": "web-187",
      "chapter": "html-forms",
      "type": "single",
      "question": "You want to create a smooth visual effect where a button changes its background color\nover 0.5 seconds when a user hovers over it. Which CSS property is used to define the\nspeed curve and duration of this change?",
      "explanation": "transition is the appropriate shorthand, for example transition:background-color 0.5s ease. A hover rule changes background-color and the transition interpolates that change over the declared duration and timing curve. transform changes geometry rather than controlling color interpolation. keyframes is used as @keyframes to define animation stages, not the property requested. animation can implement more elaborate named sequences, but a simple state change on hover is directly handled with a transition.",
      "options": [
        "transition",
        "animation",
        "transform",
        "keyframes"
      ],
      "correct": 0
    },
    {
      "id": "web-188",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "In a Flexbox container set to flex-direction: row, you want to align the items\nvertically (along the cross-axis).\n\nMatch the alignment goal with the correct property value for `align-items`.\n\nStretch items to fill the container height: \nAlign items to the top of the container: \nAlign items to the center of the container:",
      "explanation": "For an ordinary horizontal-writing row flex container, stretch fills the cross-axis size when the item’s cross size is auto and constraints allow it. flex-start aligns items to the cross-start edge, normally the top, and center centers them across that axis. baseline aligns text baselines rather than simply top or center. space-between is not an align-items value; it is used for distributing space in other alignment properties. Writing mode and wrapping direction can change which physical edge corresponds to cross-start.",
      "dragItems": [
        {
          "id": "i1",
          "text": "stretch"
        },
        {
          "id": "i2",
          "text": "flex-start"
        },
        {
          "id": "i3",
          "text": "center"
        },
        {
          "id": "i4",
          "text": "space-between"
        },
        {
          "id": "i5",
          "text": "baseline"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Stretch items to fill the container height:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Align items to the top of the container:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Align items to the center of the container:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-189",
      "chapter": "css-effects",
      "type": "single",
      "question": "A designer wants to create a background that smoothly changes from blue at the top to\ngreen at the bottom. Which CSS function should be used to achieve this effect?",
      "explanation": "linear-gradient creates a transition along a straight direction. For example, background-image:linear-gradient(to bottom, blue, green) places blue at the top and green at the bottom; the default direction also runs downward. radial-gradient spreads outward from a center, not simply top to bottom. color-transition and background-blend are not standard CSS gradient function names. This is a spatial color gradient, not necessarily a time-based animation or hover transition.",
      "options": [
        "linear-gradient()",
        "radial-gradient()",
        "color-transition()",
        "background-blend()"
      ],
      "correct": 0
    },
    {
      "id": "web-190",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer is using CSS Grid to place a header element into a named grid area.\nComplete the CSS code.\n\n.header {\n\n[1]\n: myHeaderArea;\n}\n.container {\ndisplay: grid;\n\n[2]\n: \"myHeaderArea myHeaderArea\" \"sidebar content\";\n}",
      "explanation": "The header item uses grid-area:myHeaderArea to request the named area. The container uses grid-template-areas to define the two-row pattern: myHeaderArea spans both columns in row one, followed by sidebar and content in row two. grid-template-columns sizes tracks, and grid-auto-flow controls automatic placement rather than naming the area map. Repeating the same area name forms the rectangular header region; placing the template declaration on the item would not establish the container’s grid map.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid-auto-flow"
        },
        {
          "id": "i2",
          "text": "grid-area"
        },
        {
          "id": "i3",
          "text": "grid-template-areas"
        },
        {
          "id": "i4",
          "text": "grid-template-columns"
        },
        {
          "id": "i5",
          "text": "grid-template-areas"
        },
        {
          "id": "i6",
          "text": "grid-area"
        },
        {
          "id": "i7",
          "text": "grid-template-columns"
        },
        {
          "id": "i8",
          "text": "grid-auto-flow"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-191",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Indicate whether the following statements regarding CSS 3D Transformations are True\nor False.",
      "explanation": "The first statement is Yes in its intended projection sense: perspective specifies the viewer-to-z=0-plane distance, with a smaller positive value producing stronger perspective. It does not literally change the object’s z position. The second is No: rotateZ rotates around the depth axis, whereas the horizontal x axis is used by rotateX. The third is Yes: translateZ changes depth toward or away from the viewer. Without perspective, depth changes may not produce an obvious size change on screen.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The perspective property defines how far the object is away from the user, affecting the intensity of the 3D effect.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The rotateZ() function rotates an element around the horizontal axis (like a gymnast on a bar).",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The translateZ() function moves an element closer to or further away from the viewer (Z-axis).",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-192",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete this required website URL input.",
      "explanation": "Use type=\"url\" for native checking of a nonempty absolute URL and required to reject an empty value. email validates an email-like address, password masks input text, and text has no URL-specific format check. multiple does not make this URL control mandatory, readonly prevents editing, and disabled removes it from ordinary submission/validation instead of requiring a value. The label for=\"site\" matches the input id. URL syntax validity does not prove that the website exists or is safe.",
      "dragItems": [
        {
          "id": "i1",
          "text": "email"
        },
        {
          "id": "i2",
          "text": "password"
        },
        {
          "id": "i3",
          "text": "url"
        },
        {
          "id": "i4",
          "text": "text"
        },
        {
          "id": "i5",
          "text": "multiple"
        },
        {
          "id": "i6",
          "text": "required"
        },
        {
          "id": "i7",
          "text": "readonly"
        },
        {
          "id": "i8",
          "text": "disabled"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<label for=\"site\">Website:</label>\n<input type=\"[1]\" id=\"site\" name=\"website\" [2]>"
    },
    {
      "id": "web-193",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Change the background color of the body element specifically—not the root html element—to blue using JavaScript.\n\ndocument.[1].style.[2] = \"blue\";",
      "explanation": "Use document.body.style.backgroundColor = \"blue\". body selects the requested body element, and backgroundColor is the camel-cased DOM style property for background-color. documentElement selects the root html element, which can also color a page canvas but is expressly not the target here. head holds metadata and forms is a collection, so neither selects the body. color sets foreground text, borderColor sets border paint, and backgroundImage requires an image value rather than the color keyword blue. The body must exist before this statement runs.",
      "dragItems": [
        {
          "id": "i1",
          "text": "forms"
        },
        {
          "id": "i2",
          "text": "body"
        },
        {
          "id": "i3",
          "text": "head"
        },
        {
          "id": "i4",
          "text": "documentElement"
        },
        {
          "id": "i5",
          "text": "backgroundColor"
        },
        {
          "id": "i6",
          "text": "color"
        },
        {
          "id": "i7",
          "text": "backgroundImage"
        },
        {
          "id": "i8",
          "text": "borderColor"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-194",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Complete the switch statement to check the variable \"day\".\n\nswitch (day) {\n\n[1]\n 1:\ntext = \"Monday\";\n\n[2]\n;\ndefault:\ntext = \"Unknown\";\n}",
      "explanation": "case introduces the comparison label case 1, which matches day using strict equality. break exits the switch after assigning \"Monday\", preventing fallthrough into default and replacement with \"Unknown\". default has no comparison value and is already present as the fallback. if and switch cannot replace case in that syntax. return would exit an enclosing function if one existed, but none is specified; pass and raise are not the JavaScript switch-exit statements. The conventional completion is therefore case and break.",
      "dragItems": [
        {
          "id": "i1",
          "text": "case"
        },
        {
          "id": "i2",
          "text": "default"
        },
        {
          "id": "i3",
          "text": "if"
        },
        {
          "id": "i4",
          "text": "switch"
        },
        {
          "id": "i5",
          "text": "raise"
        },
        {
          "id": "i6",
          "text": "return"
        },
        {
          "id": "i7",
          "text": "pass"
        },
        {
          "id": "i8",
          "text": "break"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-195",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete both tag names to create a list of suggestions while still allowing free-text input.",
      "explanation": "Both tag names are datalist, opening the suggestions container and closing it correctly. Its id=\"fruits\" matches the input’s list=\"fruits\", so Apple and Banana become suggestions while free-text entry remains possible. select creates a restricted selection control rather than this input-linked suggestion source. option is an individual suggested item, and optgroup is a grouping mechanism for options rather than the list target. Matching the end tag matters for the intended document structure.",
      "dragItems": [
        {
          "id": "i1",
          "text": "select"
        },
        {
          "id": "i2",
          "text": "optgroup"
        },
        {
          "id": "i3",
          "text": "option"
        },
        {
          "id": "i4",
          "text": "datalist"
        },
        {
          "id": "i5",
          "text": "optgroup"
        },
        {
          "id": "i6",
          "text": "option"
        },
        {
          "id": "i7",
          "text": "datalist"
        },
        {
          "id": "i8",
          "text": "select"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<input list=\"fruits\">\n<[1] id=\"fruits\">\n  <option value=\"Apple\">\n  <option value=\"Banana\">\n</[2]>"
    },
    {
      "id": "web-196",
      "chapter": "graphics",
      "type": "multiple",
      "question": "You are reviewing CSS code for a photo gallery. You need to identify which lines correctly apply a visual filter to an image element.\n\nWhich two CSS rules contain valid syntax for the `filter` property? (Choose 2)",
      "explanation": "grayscale(100%) is a valid filter function that removes saturation, and drop-shadow(5px 5px 10px gray) supplies valid shadow offsets, blur, and color. blur(50%) is invalid because blur takes a length rather than a percentage. box-shadow is a separate CSS property, not a function accepted within filter. Consequently valid-looking shadow dimensions do not rescue filter:box-shadow(...); the property/function relationship must also be correct.",
      "options": [
        "filter: blur(50%);",
        "filter: grayscale(100%);",
        "filter: drop-shadow(5px 5px 10px gray);",
        "filter: box-shadow(5px 5px 10px gray);"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "web-197",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are creating a form for inventory management. The \"Product ID\" field must accept exactly 2 uppercase letters followed by a hyphen and 4 digits (e.g., \"XY-1234\"). Complete the input definition.\n\ninput type=\"text\" \n[1]\n=\"[A-Z]{2}\n[2]\n\\d{4}\" title=\"Format: XX-0000\"",
      "explanation": "Use pattern for the validation attribute and a literal hyphen between [A-Z]{2} and \\d{4}. The completed expression [A-Z]{2}-\\d{4} accepts a nonempty code such as XY-1234. placeholder supplies a hint, while minlength and maxlength constrain length without expressing the required character groups. Plus and star are repetition operators rather than the requested separator, and slash is a different separator. Add required if an empty value must also be invalid; this pattern alone does not make the control mandatory.",
      "dragItems": [
        {
          "id": "i1",
          "text": "placeholder"
        },
        {
          "id": "i2",
          "text": "pattern"
        },
        {
          "id": "i3",
          "text": "minlength"
        },
        {
          "id": "i4",
          "text": "maxlength"
        },
        {
          "id": "i5",
          "text": "-"
        },
        {
          "id": "i6",
          "text": "+"
        },
        {
          "id": "i7",
          "text": "*"
        },
        {
          "id": "i8",
          "text": "/"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-198",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer is constructing a 3D cube icon using SVG. The code snippet below represents the top circular detail and the diagonal lines crossing the faces.\n\nUsing the coordinate system shown in the image, complete the markup by selecting the correct tag names and attribute values.\n\n<svg height=\"500\" width=\"500\">\n<polygon points=\"200,45 350,100 200,170 50,100\" ... />\n<polygon points=\"200,170 50,100 50,275 200,365\" ... />\n<polygon points=\"350,100 350,275 200,365 200,170\" ... />\n\n< \n[1]\n cx=\"200\" cy=\"100\" rx=\"20\" ry=\"10\" style=\"fill:white\" />\n\n< \n[2]\n x1=\"200\" y1=\"365\" x2=\"50\" y2=\"100\" style=\"stroke:white; stroke-width:8\" />\n\n< \n[3]\n x1=\"200\" y1=\"365\" \n[4]\n style=\"stroke:white; stroke-width:8\" />",
      "explanation": "The detail uses ellipse because rx=20 and ry=10 define unequal horizontal and vertical radii. Both diagonals use line because their geometry is given by x1/y1 and x2/y2. The right-hand diagonal runs from (200,365) to the pictured corner (350,100), requiring x2=\"350\" y2=\"100\". circle uses r instead of rx/ry, and rect uses rectangular geometry rather than endpoint attributes. The supplied whitespace and ellipses make this an illustrative fragment, not a complete executable SVG document; the selected names and coordinates still determine the intended shapes.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ellipse"
        },
        {
          "id": "i2",
          "text": "circle"
        },
        {
          "id": "i3",
          "text": "line"
        },
        {
          "id": "i4",
          "text": "rect"
        },
        {
          "id": "i5",
          "text": "circle"
        },
        {
          "id": "i6",
          "text": "ellipse"
        },
        {
          "id": "i7",
          "text": "rect"
        },
        {
          "id": "i8",
          "text": "line"
        },
        {
          "id": "i9",
          "text": "ellipse"
        },
        {
          "id": "i10",
          "text": "rect"
        },
        {
          "id": "i11",
          "text": "line"
        },
        {
          "id": "i12",
          "text": "circle"
        },
        {
          "id": "i13",
          "text": "x2=\"350\" y2=\"100\""
        },
        {
          "id": "i14",
          "text": "ellipse"
        },
        {
          "id": "i15",
          "text": "line"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15"
          ]
        }
      ],
      "image": "assets/html5/pdf-073-svg-cube.png"
    },
    {
      "id": "web-199",
      "chapter": "html-forms",
      "type": "single",
      "question": "Review the following input definition:\n<input type=\"text\" pattern=\"User\\d{3}\">\n\nWhich of the following values will be accepted by this field?",
      "explanation": "User123 matches the case-sensitive literal User followed by exactly three digits. User12 has only two digits and User1234 has four, so neither matches the whole value. user123 uses a lowercase u and fails the literal prefix. HTML pattern validation does not merely look for a matching substring; it tests the complete nonempty value. An empty value would require required to be rejected as well, but none of the offered values is empty.",
      "options": [
        "User12",
        "user123",
        "User123",
        "User1234"
      ],
      "correct": 2
    },
    {
      "id": "web-200",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "You need to apply a specific style only for devices with a screen width between 600px and 900px. Complete the media query.\n\n@media screen and (min-width: 600px) \n[1]\n (max-width: 900px) { ... }",
      "explanation": "and combines both constraints so a screen viewport must be at least 600px and at most 900px, including both endpoints. Using a union would match widths satisfying only one bound, which would not restrict the range. not negates a condition rather than adding the second bound in this position. The media width is the viewport width in CSS pixels, not necessarily the hardware screen’s physical pixel width, despite the stem’s device wording.",
      "dragItems": [
        {
          "id": "i1",
          "text": "or"
        },
        {
          "id": "i2",
          "text": "not"
        },
        {
          "id": "i3",
          "text": "and"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        }
      ]
    },
    {
      "id": "web-201",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "For each statement regarding HTML5 form attributes, indicate Yes if the statement is true and No if the statement is false.",
      "explanation": "The first statement is Yes for normal interactive submission of a supported required control: an empty value is invalid. The second is No because readonly prevents user editing; the clause saying validation is ignored does not make the claim about editing true. The third is Yes for ordinary textual inputs: the value attribute supplies the initial/default value, while the live value property can later differ after editing. Validation can be bypassed through novalidate or certain programmatic submission paths, so these are ordinary form-behavior rules.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The 'required' attribute prevents a form from being submitted if the input field is empty.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The 'readonly' attribute allows the user to edit the value, but validation is ignored.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The 'value' attribute specifies the initial text displayed inside an input field.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-202",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "A front-end developer is configuring the \"User Profile\" form. Match the correct HTML5 attribute to the specific requirement described below.\n\n1. The \"Username\" field must strictly match a specific format (only letters and numbers, no symbols).\nAttribute: \n\n2. The \"Bio\" field should show a light gray text hint (\"Tell us about yourself...\") that vanishes when the user clicks inside.\nAttribute: \n\n3. The \"Email\" field must not be left empty; the form cannot be submitted without it.\nAttribute: \n\n4. The \"Portfolio Upload\" field should allow the user to select and upload five images at the same time.\nAttribute:",
      "explanation": "pattern expresses the username’s required alphanumeric format. placeholder supplies the Bio hint without making it submitted data; it is shown while empty and need not disappear merely on focus in every browser. required rejects a missing Email value. multiple enables selecting several files in one file-picker action, but does not enforce exactly five images; file type and count checks are separate. maxlength limits text length and is not a replacement for these format, hint, mandatory-value, or multi-file requirements.",
      "dragItems": [
        {
          "id": "i1",
          "text": "maxlength"
        },
        {
          "id": "i2",
          "text": "multiple"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "placeholder"
        },
        {
          "id": "i5",
          "text": "required"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Require a specified alphanumeric format.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Display a hint while the control is empty.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Require a nonempty email value.",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Allow several images to be selected in one file-selection action.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-203",
      "chapter": "css-layout",
      "type": "single",
      "question": "You have three floated div elements with width: 33.3%. You add a border to them, and they no longer fit on one line, breaking the layout. Which CSS property fixes this by including the border and padding in the element's total width and height?",
      "explanation": "box-sizing:border-box includes padding and border inside the declared width and height, preventing those additions from increasing each 33.3%-wide float beyond its allocated outer size. Margins remain outside that box and could still affect fitting. overflow:hidden clips or contains overflow but does not adopt this sizing model. inline-block changes display and relative positioning changes positioning behavior; neither directly changes how border and padding are counted in the specified width.",
      "options": [
        "overflow: hidden;",
        "display: inline-block;",
        "box-sizing: border-box;",
        "position: relative;"
      ],
      "correct": 2
    },
    {
      "id": "web-204",
      "chapter": "lifecycle",
      "type": "dropdown",
      "question": "Complete the structure to check if the time is less than 12, otherwise if it is less than 18.",
      "explanation": "Use else if for the second condition and else for the final fallback. If time is below 12 the morning branch runs; otherwise values below 18 take the afternoon branch, and the remainder takes evening. elif is not JavaScript syntax, then is not required, and if else has the wrong order for this chain. try/finally concern exception handling rather than this conditional structure, and except is not the JavaScript catch keyword. Only one branch executes in the chain.",
      "dragItems": [
        {
          "id": "i1",
          "text": "elif"
        },
        {
          "id": "i2",
          "text": "then"
        },
        {
          "id": "i3",
          "text": "else if"
        },
        {
          "id": "i4",
          "text": "if else"
        },
        {
          "id": "i5",
          "text": "finally"
        },
        {
          "id": "i6",
          "text": "else"
        },
        {
          "id": "i7",
          "text": "try"
        },
        {
          "id": "i8",
          "text": "except"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "if (time < 12) { /* morning */ }\n[1] (time < 18) { /* afternoon */ }\n[2] { /* evening */ }"
    },
    {
      "id": "web-205",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You want to check if a checkbox is checked or not to display a message.\n\nlet isChecked = document.getElementById(\"accept\").\n[1]\n;\nconsole.log(isChecked);",
      "explanation": "checked is the checkbox’s current Boolean checked state, so the code logs true or false depending on whether it is selected. disabled tells whether user interaction is disabled, which is independent of selection. invalid and valid are CSS pseudo-class names, not these direct checkbox-state properties; validation can instead be examined through validity or checkValidity. The checked property should not be confused with the checked HTML attribute, which primarily represents the default checked state.",
      "dragItems": [
        {
          "id": "i1",
          "text": "disabled"
        },
        {
          "id": "i2",
          "text": "checked"
        },
        {
          "id": "i3",
          "text": "invalid"
        },
        {
          "id": "i4",
          "text": "valid"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-206",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You need to group related elements in a long registration form to make it more accessible and easier to read. You also want to add a caption to this group.",
      "explanation": "The sequence is <fieldset>, <legend>, </legend>, </fieldset>. fieldset encloses the related first-name and last-name controls, while legend contains the group caption User Details. Closing legend before adding the inputs keeps the controls inside the group rather than in its caption. Reversing opening and closing tags or ending fieldset before its contents breaks the intended nesting. A legend is a caption for a fieldset, not a standalone replacement for the grouping container.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<fieldset>"
        },
        {
          "id": "i2",
          "text": "<legend>"
        },
        {
          "id": "i3",
          "text": "</legend>"
        },
        {
          "id": "i4",
          "text": "</fieldset>"
        },
        {
          "id": "i5",
          "text": "<fieldset>"
        },
        {
          "id": "i6",
          "text": "</legend>"
        },
        {
          "id": "i7",
          "text": "</fieldset>"
        },
        {
          "id": "i8",
          "text": "<legend>"
        },
        {
          "id": "i9",
          "text": "<legend>"
        },
        {
          "id": "i10",
          "text": "</fieldset>"
        },
        {
          "id": "i11",
          "text": "</legend>"
        },
        {
          "id": "i12",
          "text": "<fieldset>"
        },
        {
          "id": "i13",
          "text": "</legend>"
        },
        {
          "id": "i14",
          "text": "</fieldset>"
        },
        {
          "id": "i15",
          "text": "<fieldset>"
        },
        {
          "id": "i16",
          "text": "<legend>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ],
      "code": "[1]\n  [2]User Details[3]\n  <input type=\"text\" name=\"fname\">\n  <input type=\"text\" name=\"lname\">\n[4]"
    },
    {
      "id": "web-207",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer is building a \"Shipping Address\" form and wants to provide a suggestion list of common countries for the user to choose from, while still allowing them to type a new value if needed.",
      "explanation": "Use datalist for the element and country-list for its id. That id must exactly match the input’s list attribute; country is the input id and name, not the suggestions-list target. Canada and France are suggested option values, but users can still type another country unless separate validation disallows it. select would create a restricted choice control, option is an individual entry, and optgroup does not supply the required datalist association. countries and country-input do not match the list reference.",
      "dragItems": [
        {
          "id": "i1",
          "text": "select"
        },
        {
          "id": "i2",
          "text": "optgroup"
        },
        {
          "id": "i3",
          "text": "option"
        },
        {
          "id": "i4",
          "text": "datalist"
        },
        {
          "id": "i5",
          "text": "countries"
        },
        {
          "id": "i6",
          "text": "country-input"
        },
        {
          "id": "i7",
          "text": "country-list"
        },
        {
          "id": "i8",
          "text": "country"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<label for=\"country\">Choose a country:</label>\n<input list=\"country-list\" id=\"country\" name=\"country\">\n<[1] id=\"[2]\">\n  <option value=\"Canada\">\n  <option value=\"France\">\n</datalist>"
    },
    {
      "id": "web-208",
      "chapter": "html-forms",
      "type": "single",
      "question": "You are implementing a field requiring a date in the format DD/MM/YYYY. Which pattern attribute correctly validates this input?",
      "explanation": "\\d{2}/\\d{2}/\\d{4} matches two digits, slash, two digits, slash, and four digits, which is the requested textual DD/MM/YYYY shape. The hyphenated alternative uses the wrong separator. The {2,4} version permits variable-length groups, and literal DD/MM/YYYY matches letters rather than a numeric date. This checks format only: values such as 99/99/9999 can still match, so real calendar validity requires additional logic. It applies to textual input; pattern is not used to reformat a native date control.",
      "options": [
        "pattern=\"\\d{2}/\\d{2}/\\d{4}\"",
        "pattern=\"[0-9]{2}-[0-9]{2}-[0-9]{4}\"",
        "pattern=\"\\d{2,4}/\\d{2,4}/\\d{2,4}\"",
        "pattern=\"DD/MM/YYYY\""
      ],
      "correct": 0
    },
    {
      "id": "web-209",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "For the array: const colors = [\"red\", \"green\"];\nIndicate if the statements about loops are True (Yes) or False (No).",
      "explanation": "Yes: for...of uses the array iterator and yields \"red\" then \"green\". Yes in the stated simple array: for...in enumerates the index property keys \"0\" and \"1\", which are strings rather than numbers. It can also enumerate other enumerable properties, so it is generally less suitable for array values. The last statement is No because arrays are routinely traversed using these constructs, conventional indexed loops, or array iteration methods. The initial array contains two elements.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The loop 'for (let x of colors)' will iterate over the values \"red\" and \"green\".",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The loop 'for (let x in colors)' will iterate over the indexes 0 and 1.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Loops cannot be used to iterate through an array.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "web-210",
      "chapter": "graphics",
      "type": "single",
      "question": "You are using a flex container with 'flex-direction: row'. You want to align the items vertically in the center of the container (along the cross axis). Which property should you use?",
      "explanation": "align-items:center centers flex items on the cross axis, which is vertical for a row container in ordinary horizontal writing. justify-content:center centers along the main axis instead. text-align affects inline text alignment and is not the flex cross-axis control. align-content distributes flex lines and normally has no effect on a single-line container; it is not a substitute for aligning each item within its line. Actual visible centering requires cross-axis space in the container.",
      "options": [
        "justify-content: center",
        "align-items: center",
        "text-align: center",
        "align-content: center"
      ],
      "correct": 1
    },
    {
      "id": "web-211",
      "chapter": "html-forms",
      "type": "single",
      "question": "You are designing a feedback form where users rate a service on a scale from 1 to 10. You want to use a slider control for this input. Which input type should you use?",
      "explanation": "type=\"range\" creates a slider control. Add min=\"1\" and max=\"10\" to express the rating bounds and, if desired, step=\"1\" for whole-number ratings. type=\"number\" is a numeric entry control, often with spin buttons, rather than the slider requested. slider and scale are not standard input type keywords. A range control’s appearance varies by browser and needs an accessible label; choosing the type does not by itself explain the meaning of its values.",
      "options": [
        "type=\"number\"",
        "type=\"range\"",
        "type=\"slider\"",
        "type=\"scale\""
      ],
      "correct": 1
    },
    {
      "id": "web-212",
      "chapter": "html-forms",
      "type": "multiple",
      "question": "The development team has just delivered a build of a new web application. You are currently in the Testing phase of the application lifecycle.\n\nWhich THREE activities are primarily performed during this specific phase? (Select 3)",
      "explanation": "The three direct testing activities are verifying required functionality, identifying and logging defects, and checking conformance with design specifications. They evaluate the delivered build against expected behavior. Fixing source syntax errors is implementation/debugging work rather than the primary validation activity described. New feature requests concern future requirements. Customer bug reports can contribute valuable evidence, especially in beta testing, but requesting them is less direct than the three explicit build-validation tasks selected here; lifecycle activities can overlap in real projects.",
      "options": [
        "Reviewing the source code to fix syntax errors.",
        "Verifying that the application functions correctly according to requirements.",
        "Requesting customers to submit bug reports.",
        "Identifying and logging defects or bugs within the application.",
        "Ensuring the application aligns with the original design specifications.",
        "Asking customers to provide requests for new features."
      ],
      "correct": [
        1,
        3,
        4
      ]
    },
    {
      "id": "web-213",
      "chapter": "html-forms",
      "type": "single",
      "question": "A developer creates a form input with the following pattern attribute:\npattern=\"[A-Z]{3}-\\d{4}\"\n\nWhich of the following values will successfully validate against this pattern?",
      "explanation": "ABC-1234 contains exactly three uppercase ASCII letters, one hyphen, and four digits, so it matches [A-Z]{3}-\\d{4}. abc-1234 fails the uppercase requirement, ABC-123 has only three digits, and ABC1234 omits the required hyphen. The pattern applies to the whole nonempty value rather than a substring. As with other pattern-only examples, required is separately needed if leaving the control empty must fail validation.",
      "options": [
        "abc-1234",
        "ABC-123",
        "ABC-1234",
        "ABC1234"
      ],
      "correct": 2
    },
    {
      "id": "web-214",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "All three flex items initially have order: 0. Complete the rule with the smallest positive integer that places A after B and C.",
      "explanation": "Set order:1 on item A. All items begin at order 0, so B and C retain the earlier value and appear before A in order-modified layout. One is the smallest positive integer that achieves this; 2 or 3 would also move A after them but fails the smallest-value requirement, while 0 does not distinguish A. flex-grow, flex-shrink, and flex-basis affect sizes rather than sequence. DOM order and accessibility reading order are not rewritten.",
      "dragItems": [
        {
          "id": "i1",
          "text": "order"
        },
        {
          "id": "i2",
          "text": "flex-grow"
        },
        {
          "id": "i3",
          "text": "flex-shrink"
        },
        {
          "id": "i4",
          "text": "flex-basis"
        },
        {
          "id": "i5",
          "text": "0"
        },
        {
          "id": "i6",
          "text": "2"
        },
        {
          "id": "i7",
          "text": "3"
        },
        {
          "id": "i8",
          "text": "1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".item-a { [1]: [2]; }"
    },
    {
      "id": "web-215",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are creating a login form. The password field must be hidden from view as the user types and must be a required field to submit the form. Complete the markup.\n\ninput type=\"\n[1]\n\" name=\"pwd\" \n[2]",
      "explanation": "Use password and required. The password input masks its displayed characters while preserving an editable value, and required prevents normal submission when it is empty. text, email, and url do not provide the requested masking. disabled makes the field inactive and excludes it from normal form submission; readonly prevents editing, and multiple does not impose a mandatory value. Masking is a visual privacy feature, not encryption: transport security such as HTTPS is still essential.",
      "dragItems": [
        {
          "id": "i1",
          "text": "url"
        },
        {
          "id": "i2",
          "text": "text"
        },
        {
          "id": "i3",
          "text": "email"
        },
        {
          "id": "i4",
          "text": "password"
        },
        {
          "id": "i5",
          "text": "disabled"
        },
        {
          "id": "i6",
          "text": "multiple"
        },
        {
          "id": "i7",
          "text": "required"
        },
        {
          "id": "i8",
          "text": "readonly"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-216",
      "chapter": "html-forms",
      "type": "multiple",
      "question": "A front-end developer is creating an animation for a button and needs to apply 2D effects using the CSS `transform` property.\n\nWhich two functions are valid values that can be used with this property? (Choose 2)",
      "explanation": "skew() and matrix() are standard 2D CSS transform functions. skew shears axes by angle, and matrix supplies six coefficients for an affine transform. As written, the parentheses indicate the function families; actual declarations need valid arguments. move, expand, and scroll are not CSS transform function names. Translation and resizing are instead expressed with translate and scale. A concept that sounds like motion or enlargement is not automatically a valid function in transform.",
      "options": [
        "skew()",
        "move()",
        "matrix()",
        "expand()",
        "scroll()"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "web-217",
      "chapter": "javascript",
      "type": "single",
      "question": "Which event triggers IMMEDIATELY when the user types a character into a text field, allowing for real-time updates?",
      "explanation": "oninput handles changes to a text control’s value as the user edits, enabling real-time feedback without waiting for commitment or focus loss. onchange normally fires for a text input when the changed value is committed, often on blur. onclick and onmouseover respond to pointer interactions, not each textual edit. Input can also arise from paste or other editing operations, so it is not limited to physical key presses. Programmatically assigning value does not automatically dispatch input.",
      "options": [
        "onclick",
        "onchange",
        "oninput",
        "onmouseover"
      ],
      "correct": 2
    },
    {
      "id": "web-218",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You want to add or remove the class \"dark-mode\" from the body element when a button is clicked (toggle effect).",
      "explanation": "Use classList and toggle, producing document.body.classList.toggle(\"dark-mode\"). With one argument, toggle adds the token if absent and removes it if present. add only adds, remove only removes, and contains only tests presence. className is a string rather than a DOMTokenList with these methods; style manages inline declarations and dataset manages data-* values. This operation preserves other class tokens, allowing the rest of the body styling to remain intact.",
      "dragItems": [
        {
          "id": "i1",
          "text": "classList"
        },
        {
          "id": "i2",
          "text": "className"
        },
        {
          "id": "i3",
          "text": "style"
        },
        {
          "id": "i4",
          "text": "dataset"
        },
        {
          "id": "i5",
          "text": "add"
        },
        {
          "id": "i6",
          "text": "remove"
        },
        {
          "id": "i7",
          "text": "contains"
        },
        {
          "id": "i8",
          "text": "toggle"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "document.body.[1].[2](\"dark-mode\");"
    },
    {
      "id": "web-219",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "You have a CSS Grid container and you want to create a 20px space between the rows and columns without adding margins to the individual items.",
      "explanation": "Use gap:20px. A single gap value sets both row-gap and column-gap on the grid, producing the requested gutters without per-item margins. padding creates internal edge space and margin creates outer spacing rather than grid gutters. border-spacing concerns separated table borders, not Grid. The unit matters: bare 1 or 2 is not a valid nonzero CSS length for gap, while 0 would deliberately create no gutter.",
      "dragItems": [
        {
          "id": "i1",
          "text": "padding"
        },
        {
          "id": "i2",
          "text": "margin"
        },
        {
          "id": "i3",
          "text": "border-spacing"
        },
        {
          "id": "i4",
          "text": "gap"
        },
        {
          "id": "i5",
          "text": "1"
        },
        {
          "id": "i6",
          "text": "2"
        },
        {
          "id": "i7",
          "text": "20px"
        },
        {
          "id": "i8",
          "text": "0"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".grid-container {\n  display: grid;\n  [1]: [2];\n}"
    },
    {
      "id": "web-220",
      "chapter": "html-forms",
      "type": "single",
      "question": "A web developer is creating an interactive SVG graphic. They need to animate a rectangle so that it spins 360 degrees in place.\n\nWhich specific SVG element is used to animate the `transform` attribute to achieve this rotation effect?",
      "explanation": "animateTransform is the SVG animation element specifically for animating a transform, such as type=\"rotate\" through a 360-degree revolution around the chosen center. animateMotion instead moves an element along a path and is not the direct transform-attribute animation requested. path and circle describe shapes rather than this animation operation. The square may be a rect target; its geometry does not determine the animation element name, and the rotation center must be chosen to spin it in place.",
      "options": [
        "<animateMotion>",
        "<path>",
        "<animateTransform>",
        "<circle>"
      ],
      "correct": 2
    },
    {
      "id": "web-221",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Evaluate each statement independently against the initial array: let cars = [\"BMW\", \"Audi\"].",
      "explanation": "The statements are evaluated independently against [\"BMW\",\"Audi\"]. The first is No because push appends \"Tesla\" at the end, not the beginning; unshift would prepend it. The second is Yes because pop removes and returns the last element, initially \"Audi\". The third is Yes because the original array contains two entries. Applying all operations sequentially would change the lengths and last elements, which is why the independence condition matters.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The method cars.push(\"Tesla\") adds the element to the beginning of the array.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The method cars.pop() removes the last element from the array (\"Audi\").",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The property cars.length will return 2.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-222",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "For each statement regarding the HTML5 'input' types and attributes, indicate Yes if the statement is true and No if the statement is false.",
      "explanation": "The first is Yes for the built-in email syntax check on nonempty values, but it does not verify account existence and an optional empty control can be valid. The second is No: placeholder is a hint, not the control’s value or submitted default. The third is Yes for ordinary text-field user entry: maxlength limits permitted length, typically preventing excess typing or paste. Native validation and UI behavior have bypass and programmatic exceptions, so server-side checks remain necessary.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The 'type=\"email\"' attribute automatically validates that the text entered is in a proper email format.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The 'placeholder' attribute sets the default value that is sent to the server when the form is submitted.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The 'maxlength' attribute limits the number of characters a user can type into a text field.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-223",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "To ensure your responsive website renders correctly on mobile devices without zooming out, you need to configure the viewport meta tag. Complete the code.",
      "explanation": "Use width=device-width and initial-scale=1.0. device-width is the recognized viewport width keyword, and scale 1.0 requests the normal initial zoom. screen-width, auto, and 100% are not the intended width values in this declaration. Initial scales 0.5 or 2.0 explicitly request zooming out or in. The viewport tag helps mobile layout use device CSS width, but does not by itself prevent a fixed-width element from overflowing or disable user zoom.",
      "dragItems": [
        {
          "id": "i1",
          "text": "100%"
        },
        {
          "id": "i2",
          "text": "auto"
        },
        {
          "id": "i3",
          "text": "screen-width"
        },
        {
          "id": "i4",
          "text": "device-width"
        },
        {
          "id": "i5",
          "text": "2.0"
        },
        {
          "id": "i6",
          "text": "auto"
        },
        {
          "id": "i7",
          "text": "1.0"
        },
        {
          "id": "i8",
          "text": "0.5"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<meta name=\"viewport\" content=\"width=[1], initial-scale=[2]\">"
    },
    {
      "id": "web-224",
      "chapter": "lifecycle",
      "type": "dropdown",
      "question": "You want to place an image on the left side of a container so that the paragraph text wraps around it on the right side.\n\nimg {\n\n[1]\n: \n[2]\n;\nmargin-right: 10px;\n}",
      "explanation": "Use float:left. The image is placed toward the left of its containing block, and surrounding inline text can wrap on its right. margin-right:10px leaves space between the image and that text. right would reverse the arrangement, none would not float it, and center is not an ordinary float value. str, bool, and int are not the CSS property for floating, regardless of their use as type names in other languages.",
      "dragItems": [
        {
          "id": "i1",
          "text": "str"
        },
        {
          "id": "i2",
          "text": "bool"
        },
        {
          "id": "i3",
          "text": "float"
        },
        {
          "id": "i4",
          "text": "int"
        },
        {
          "id": "i5",
          "text": "none"
        },
        {
          "id": "i6",
          "text": "left"
        },
        {
          "id": "i7",
          "text": "right"
        },
        {
          "id": "i8",
          "text": "center"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-225",
      "chapter": "css-layout",
      "type": "single",
      "question": "You have a div element with a fixed height of 200px containing a long article. You want the user to be able to read the entire text by scrolling, but you only want the scrollbar to appear if the text is actually too long to fit. Which CSS property should you apply?",
      "explanation": "overflow:auto gives the fixed-height div scrolling when its content exceeds the available area. visible would let the article paint outside rather than confine it to an on-demand scroll region. hidden clips without user scrollbars, and scroll requests scrollable overflow even when the text fits, although platform overlay-scrollbar visibility can differ. The key requirement is conditional scrolling, not merely the existence of a fixed height or the possibility of clipping.",
      "options": [
        "overflow: visible",
        "overflow: hidden",
        "overflow: scroll",
        "overflow: auto"
      ],
      "correct": 3
    },
    {
      "id": "web-226",
      "chapter": "javascript",
      "type": "drag_drop",
      "question": "Match the values with their correct JavaScript data type.\nlet a = \"Hello\"; // is a \nlet b = 10; // is a \nlet c = true; // is a",
      "explanation": "\"Hello\" is a string because it is a quoted text literal. 10 is a number literal, and true is a Boolean literal expressing a logical truth value. None is an array; an array would normally be written with brackets, such as [10], and is an object type in JavaScript’s typeof classification. Quoting 10 would change it to a string, and quoting true would likewise create text rather than a Boolean. Here the literal syntax directly determines each mapping.",
      "dragItems": [
        {
          "id": "i1",
          "text": "string"
        },
        {
          "id": "i2",
          "text": "number"
        },
        {
          "id": "i3",
          "text": "boolean"
        },
        {
          "id": "i4",
          "text": "array"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "let a = \"Hello\"; // is a",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "let b = 10; // is a",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "let c = true; // is a",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-227",
      "chapter": "javascript",
      "type": "single",
      "question": "You have an array: let numbers = [0, 1, 2, 3, 4]. You want to create a COPY of the first two elements ([0, 1]) without modifying the original array. Which method should you use?",
      "explanation": "slice(0,2) returns a shallow copy containing elements from index 0 up to, but not including, index 2, so the result is [0,1] and numbers remains unchanged. splice(0,2) also returns those removed elements but mutates the original array by deleting them. cut is not a standard array method. shift removes only the first element and ignores an extra count argument; it does not copy the first two. The non-mutation requirement distinguishes slice from splice.",
      "options": [
        "numbers.splice(0, 2)",
        "numbers.slice(0, 2)",
        "numbers.cut(0, 2)",
        "numbers.shift(2)"
      ],
      "correct": 1
    },
    {
      "id": "web-228",
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "A web designer is styling an image gallery and wants to apply specific visual effects to three different photos using inline CSS.\n\n1. The first image needs an \"antique\" or \"old photograph\" look (brown tone).\n\n[1]\n\n2. The second image needs to be semi-transparent to blend with the background.\n\n[2]\n\n3. The third image needs to appear as if it is floating above the page with a shadow.\n\n[3]",
      "explanation": "Select filter:sepia(100%) for the brown antique effect, opacity:0.5 for half opacity, and filter:drop-shadow(5px 5px 10px gray) for the raised shadow effect. blur softens detail, brightness darkens/lightens, and grayscale removes color without the sepia tint. opacity:50 is clamped to full opacity, 1 is opaque, and 0 is invisible. box-shadow is not a filter function, drop-shadow is not a transform function, and shadow is not the standard filter name. The supplied strip illustrates sepia and reduced opacity, but its full-color bottom image does not itself depict the newly requested shadow.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter: blur(5px);"
        },
        {
          "id": "i2",
          "text": "filter: brightness(50%);"
        },
        {
          "id": "i3",
          "text": "filter: sepia(100%);"
        },
        {
          "id": "i4",
          "text": "filter: grayscale(100%);"
        },
        {
          "id": "i5",
          "text": "opacity: 50;"
        },
        {
          "id": "i6",
          "text": "opacity: 0.5;"
        },
        {
          "id": "i7",
          "text": "opacity: 1;"
        },
        {
          "id": "i8",
          "text": "opacity: 0;"
        },
        {
          "id": "i9",
          "text": "filter: drop-shadow(5px 5px 10px gray);"
        },
        {
          "id": "i10",
          "text": "filter: box-shadow(5px 5px 10px gray);"
        },
        {
          "id": "i11",
          "text": "transform: drop-shadow(5px 5px 10px gray);"
        },
        {
          "id": "i12",
          "text": "filter: shadow(5px 5px 10px gray);"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "image": "assets/html5/pdf-067-image-filters.png"
    },
    {
      "id": "web-229",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Connect each phase of the software lifecycle to the activity that belongs to it.\nDrag every phase name on the left and drop it into the blank (  ) next to the correct activity on the right.\nYou earn points for every correct connection.\n\nActivities:\n- Construct the HTML pages \n- Upload the site to the server \n- Sketch the page wireframes \n- Check links and forms for errors \n- Keep the content and code up-to-date \n- Decide what the site must do and for whom",
      "explanation": "Constructing HTML pages belongs to Develop because it implements the site. Uploading the release belongs to Deploy. Sketching wireframes belongs to Design. Checking links and forms for errors belongs to Test. Keeping content and code current belongs to Maintain. Deciding the site’s purpose and audience belongs to Plan. Each mapping identifies the primary lifecycle responsibility rather than assuming every related activity occurs in only one stage of an iterative real-world project.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Plan"
        },
        {
          "id": "i2",
          "text": "Design"
        },
        {
          "id": "i3",
          "text": "Develop"
        },
        {
          "id": "i4",
          "text": "Test"
        },
        {
          "id": "i5",
          "text": "Deploy"
        },
        {
          "id": "i6",
          "text": "Maintain"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Construct the HTML pages",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Upload the site to the server",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Sketch the page wireframes",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Check links and forms for errors",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Keep the content and code up-to-date",
          "correctItemId": "i6"
        },
        {
          "id": "z6",
          "label": "Decide what the site must do and for whom",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "web-230",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Arrange the following stages of the Application Lifecycle Management (ALM) process in the correct chronological order, starting from the initial concept.\n\nStage 1 \nStage 2 \nStage 3 \nStage 4 \nStage 5",
      "explanation": "The order is Plan, Design, Develop, Test, Deploy. Goals and requirements precede the solution design; implementation follows design; validation checks the build before it is released. Testing before there is any relevant implementation would not validate the finished build, and deploying before testing would skip that release check. Only five stages are supplied, so this ordering stops at deployment. Maintenance is commonly part of the broader cycle but is not a draggable item here.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Design"
        },
        {
          "id": "i2",
          "text": "Plan"
        },
        {
          "id": "i3",
          "text": "Test"
        },
        {
          "id": "i4",
          "text": "Develop"
        },
        {
          "id": "i5",
          "text": "Deploy"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Stage 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Stage 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Stage 3",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Stage 4",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Stage 5",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "web-231",
      "chapter": "graphics",
      "type": "single",
      "question": "A developer is using the HTML5 Canvas API to draw shapes.\nWhat does the following method call accomplish?\n\nctx.strokeRect(20, 20, 150, 100);",
      "explanation": "strokeRect(20,20,150,100) immediately paints the outline of a rectangle with top-left corner (20,20), width 150, and height 100 using the current stroke style. It does not fill the interior; fillRect would do that. clip works with a path to change the clipping region, and clearRect erases a rectangular area. strokeRect does not add this rectangle to the current path, so a subsequent stroke call is not required for its outline to appear.",
      "options": [
        "It draws a solid, filled rectangle.",
        "It creates a rectangular clipping region.",
        "It draws the outline of a rectangle without filling it.",
        "It clears a rectangular area on the canvas."
      ],
      "correct": 2
    },
    {
      "id": "web-232",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to create a slider control that allows users to select a volume level between 0 and 10 in steps of 1.\nUsing the dropdown arrow, complete the HTML code to create this input field.\n\n<label for=\"vol\">Volume:\n<input type=\"\n[1]\n\" id=\"vol\" name=\"vol\" min=\"0\" max=\"10\" step=\"1\">",
      "explanation": "range is the standard slider type. The existing min=\"0\", max=\"10\", and step=\"1\" define integer volume positions from zero through ten. url, text, and email are textual entry types and do not create the requested bounded slider. The label’s for value matches vol for association; in complete markup the label should also be properly closed. The default slider value and rendering are browser-controlled unless an explicit value is supplied.",
      "dragItems": [
        {
          "id": "i1",
          "text": "url"
        },
        {
          "id": "i2",
          "text": "text"
        },
        {
          "id": "i3",
          "text": "email"
        },
        {
          "id": "i4",
          "text": "range"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-233",
      "chapter": "graphics",
      "type": "single",
      "question": "You are creating a flexible container using CSS Flexbox.\nWhich property is used to define how flex items are distributed along the **main axis** (e.g., to push them apart to the edges)?",
      "explanation": "justify-content controls distribution along the main axis, including space-between to place the outer items at the ends with equal extra space between adjacent items. align-items controls cross-axis alignment, while align-content distributes flex lines along the cross axis when applicable. flex-direction chooses the main axis rather than the spacing along it. Positive free space must exist for the requested apart-to-the-edges distribution to be visible; flexible sizing can consume that space first.",
      "options": [
        "align-items",
        "flex-direction",
        "justify-content",
        "align-content"
      ],
      "correct": 2
    },
    {
      "id": "web-234",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer wants to listen for a \"click\" event on a button with the ID `submitBtn` and run the function `sendData` when it occurs.",
      "explanation": "Use addEventListener and click. Passing sendData without parentheses registers the function as a callback to run when the event occurs instead of calling it during setup. dispatchEvent sends an event rather than registering a listener. attachEvent is an obsolete Internet Explorer API, and onclick is a handler property normally assigned a function rather than called with this registration signature. touchstart, touchend, and mousedown represent different interactions and do not exactly implement a click listener.",
      "dragItems": [
        {
          "id": "i1",
          "text": "dispatchEvent"
        },
        {
          "id": "i2",
          "text": "addEventListener"
        },
        {
          "id": "i3",
          "text": "attachEvent"
        },
        {
          "id": "i4",
          "text": "onclick"
        },
        {
          "id": "i5",
          "text": "click"
        },
        {
          "id": "i6",
          "text": "touchstart"
        },
        {
          "id": "i7",
          "text": "touchend"
        },
        {
          "id": "i8",
          "text": "mousedown"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "var btn = document.getElementById(\"submitBtn\");\nbtn.[1](\"[2]\", sendData);"
    },
    {
      "id": "web-235",
      "chapter": "lifecycle",
      "type": "single",
      "question": "A developer is troubleshooting a web application and wants to pause the code execution at a specific line to inspect the values of variables.\nWhich tool within the browser's developer tools should be used?",
      "explanation": "A breakpoint pauses execution when the debugger reaches the chosen statement, allowing inspection of local variables, the call stack, and expressions. A validator checks conformance or syntax but is not the line-pause debugging facility. A profiler measures performance and execution costs, while a network monitor examines requests and responses. Conditional breakpoints can refine when to pause, but the basic tool for the stated task is still a breakpoint.",
      "options": [
        "Validator",
        "Breakpoint",
        "Profiler",
        "Network Monitor"
      ],
      "correct": 1
    },
    {
      "id": "web-236",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer needs to draw a red circle using SVG. The circle must be centered at coordinates (100, 100) with a radius of 50.\nUsing the dropdown arrows, complete the markup to define this shape.\n\n<svg height=\"200\" width=\"200\">\n<\n[1]\n cx=\"100\" cy=\"100\" \n[2]\n=\"50\" fill=\"red\" />\n</svg>",
      "explanation": "Use circle and r. cx=\"100\" and cy=\"100\" locate the center, while r=\"50\" sets the radius; fill=\"red\" supplies the interior color. ellipse uses separate rx and ry radii, line uses endpoints, and rect uses rectangular dimensions. b, u, and f are not the circle-radius attribute. In the untransformed 200-by-200 viewport shown, this circle occupies the region from 50 to 150 along each axis, leaving room around it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ellipse"
        },
        {
          "id": "i2",
          "text": "line"
        },
        {
          "id": "i3",
          "text": "rect"
        },
        {
          "id": "i4",
          "text": "circle"
        },
        {
          "id": "i5",
          "text": "b"
        },
        {
          "id": "i6",
          "text": "u"
        },
        {
          "id": "i7",
          "text": "r"
        },
        {
          "id": "i8",
          "text": "f"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-237",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to rotate a `div` element by 90 degrees and double its size using CSS.\nUsing drag and drop, complete the CSS rule below.",
      "explanation": "Use transform and scale, producing transform:rotate(90deg) scale(2). rotate turns the element by a quarter revolution and scale(2) doubles both x and y dimensions in rendering. This doubles linear dimensions, not merely area; the rendered area becomes four times as large. filter changes visual processing, animation controls named sequences, and transition interpolates changes rather than accepting this transform list. skew shears, translate moves, and another rotate would not supply the requested resizing.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter"
        },
        {
          "id": "i2",
          "text": "animation"
        },
        {
          "id": "i3",
          "text": "transform"
        },
        {
          "id": "i4",
          "text": "transition"
        },
        {
          "id": "i5",
          "text": "skew"
        },
        {
          "id": "i6",
          "text": "scale"
        },
        {
          "id": "i7",
          "text": "translate"
        },
        {
          "id": "i8",
          "text": "rotate"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".box {\n  [1]: rotate(90deg) [2](2);\n}"
    },
    {
      "id": "web-238",
      "chapter": "javascript",
      "type": "single",
      "question": "You are creating a new class named `Car` that inherits properties and methods from an existing class named `Vehicle`.\nWhich keyword is used to establish this inheritance relationship?",
      "explanation": "extends declares the inheritance relationship: class Car extends Vehicle { ... }. Car’s instances then inherit through the prototype chain, subject to their own definitions and initialization. super is used inside the derived class to invoke or access parent behavior; it is not the class-header inheritance keyword. inherits and implements are not JavaScript class inheritance syntax. A derived constructor must call super before accessing this, but that constructor rule is separate from declaring the relationship.",
      "options": [
        "implements",
        "inherits",
        "extends",
        "super"
      ],
      "correct": 2
    },
    {
      "id": "web-239",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer needs to save a user's preference for \"dark mode\" in the browser so that it persists even after the browser is closed and reopened.\nUsing drag and drop, complete the JavaScript code to store this data.",
      "explanation": "Use localStorage.setItem(\"theme\",\"dark\"). setItem saves the string under the theme key, and dark is the requested preference rather than light, system, or default. getItem reads an entry, removeItem deletes it, and clear deletes the storage area’s entries. localStorage normally survives browser restarts, unlike tab-session storage, but users or privacy policies can clear or block it. The setting remains scoped to the appropriate origin and must be read by later page code to apply the theme.",
      "dragItems": [
        {
          "id": "i1",
          "text": "setItem"
        },
        {
          "id": "i2",
          "text": "getItem"
        },
        {
          "id": "i3",
          "text": "removeItem"
        },
        {
          "id": "i4",
          "text": "clear"
        },
        {
          "id": "i5",
          "text": "light"
        },
        {
          "id": "i6",
          "text": "system"
        },
        {
          "id": "i7",
          "text": "default"
        },
        {
          "id": "i8",
          "text": "dark"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "localStorage.[1](\"theme\", \"[2]\");"
    },
    {
      "id": "web-240",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the media query to apply styles at viewport widths of 768px or greater.",
      "explanation": "min-width:768px matches screen viewports at least 768 CSS pixels wide, including 768. max-width selects the opposite range, while width selects exactly that width rather than everything greater. device-height tests a different feature and cannot express the requested viewport-width condition. The shown screen qualifier limits the query to screen media; the CSS body color applies only when the query matches and the cascade does not override it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "max-width"
        },
        {
          "id": "i2",
          "text": "width"
        },
        {
          "id": "i3",
          "text": "device-height"
        },
        {
          "id": "i4",
          "text": "min-width"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": "@media screen and ([1]: 768px) {\n  body { background-color: lightblue; }\n}"
    },
    {
      "id": "web-241",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Create a three-column grid with fixed 100px outer columns. The middle column must use a positive fractional track that expands to absorb the flexible remainder, not automatic or fixed-length sizing. Select the appropriate track values.",
      "explanation": "Choose 100px for each outer track and 1fr for the middle. A positive fractional factor allocates flexible remaining space after the fixed tracks and gaps. The middle option 0fr has no positive flex factor, so it does not expand to absorb the remainder; intrinsic minimum sizing can still keep that track from collapsing to zero. auto is content-sensitive automatic sizing rather than the required fractional track. A middle 100px is fixed instead of flexible. For the outer columns, automatic or fractional values fail the explicit fixed-width requirement. Content-based minimums can still cause overflow.",
      "dragItems": [
        {
          "id": "i1",
          "text": "2fr"
        },
        {
          "id": "i2",
          "text": "auto"
        },
        {
          "id": "i3",
          "text": "100px"
        },
        {
          "id": "i4",
          "text": "1fr"
        },
        {
          "id": "i5",
          "text": "auto"
        },
        {
          "id": "i6",
          "text": "1fr"
        },
        {
          "id": "i7",
          "text": "100px"
        },
        {
          "id": "i8",
          "text": "0fr"
        },
        {
          "id": "i9",
          "text": "100px"
        },
        {
          "id": "i10",
          "text": "1fr"
        },
        {
          "id": "i11",
          "text": "2fr"
        },
        {
          "id": "i12",
          "text": "auto"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": ".container {\n  display: grid;\n  grid-template-columns: [1] [2] [3];\n}"
    },
    {
      "id": "web-242",
      "chapter": "css-layout",
      "type": "single",
      "question": "Which method of the Geolocation API is used to retrieve the user's position **one time** (not tracking it continuously)?",
      "explanation": "getCurrentPosition requests one position result, delivered through callbacks rather than returned synchronously. watchPosition subscribes to ongoing position updates, and clearWatch cancels a previous subscription. getPosition is not the standard Geolocation method. The displayed parentheses identify the method names; a real getCurrentPosition call requires a success callback and may include an error callback and options. Access normally requires a secure context and permission and can fail if a position is unavailable.",
      "options": [
        "navigator.geolocation.watchPosition()",
        "navigator.geolocation.clearWatch()",
        "navigator.geolocation.getCurrentPosition()",
        "navigator.geolocation.getPosition()"
      ],
      "correct": 2
    },
    {
      "id": "web-243",
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "A developer is creating a CSS animation named \"fadeIn\".\nUsing drag and drop, complete the code to define the keyframes.",
      "explanation": "Use @keyframes to define fadeIn and from to identify its starting keyframe. from is equivalent to 0%, and to is equivalent to 100%, so the sequence moves from opacity 0 to 1. @animation is not the defining at-rule, @font-face declares fonts, and @media defines conditional rules. with, as, and in are not keyframe position keywords. Defining keyframes alone does not start an animation; an element must reference fadeIn through animation-name or the animation shorthand.",
      "dragItems": [
        {
          "id": "i1",
          "text": "@keyframes"
        },
        {
          "id": "i2",
          "text": "@animation"
        },
        {
          "id": "i3",
          "text": "@font-face"
        },
        {
          "id": "i4",
          "text": "@media"
        },
        {
          "id": "i5",
          "text": "with"
        },
        {
          "id": "i6",
          "text": "as"
        },
        {
          "id": "i7",
          "text": "in"
        },
        {
          "id": "i8",
          "text": "from"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "[1] fadeIn {\n  [2] { opacity: 0; }\n  to { opacity: 1; }\n}"
    },
    {
      "id": "web-244",
      "chapter": "javascript",
      "type": "single",
      "question": "You receive a data string from a web server in JSON format:\n'{\"name\":\"John\", \"age\":30}'.\nWhich JavaScript method should you use to convert this string into a valid JavaScript object?",
      "explanation": "JSON.parse converts the JSON text into an object with name \"John\" and numeric age 30. JSON.stringify performs the opposite operation by serializing a value into text. JSON.convert is not a standard method, and JSON.toString is not the JSON parser. Parsing requires valid JSON syntax, including double-quoted property names; it does not execute arbitrary JavaScript. The outer single quotes shown delimit a JavaScript string literal and are not part of the JSON content itself.",
      "options": [
        "JSON.stringify()",
        "JSON.toString()",
        "JSON.parse()",
        "JSON.convert()"
      ],
      "correct": 2
    },
    {
      "id": "web-245",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete a required text input that accepts exactly three uppercase ASCII letters, such as ABC. Choose the simplest matching pattern: do not include unnecessary capturing groups or additional literal text.",
      "explanation": "Use pattern with [A-Z]{3}. The character class permits uppercase ASCII letters and the quantifier requires exactly three, while required separately rejects an empty value. maxlength and minlength control length but not uppercase letters, and placeholder supplies only a hint. [A-Z]{3} = None requires unwanted literal text. (A-Z){3} repeats a literal A-Z sequence rather than selecting letters. [A-Z]{3}() matches the same values as the intended expression, but adds an unnecessary empty capturing group and therefore violates the explicit simplest-pattern requirement. HTML pattern validation matches the complete value.",
      "dragItems": [
        {
          "id": "i1",
          "text": "maxlength"
        },
        {
          "id": "i2",
          "text": "placeholder"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "minlength"
        },
        {
          "id": "i5",
          "text": "[A-Z]{3} = None"
        },
        {
          "id": "i6",
          "text": "[A-Z]{3}"
        },
        {
          "id": "i7",
          "text": "(A-Z){3}"
        },
        {
          "id": "i8",
          "text": "[A-Z]{3}()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<input type=\"text\" required [1]=\"[2]\" title=\"Three uppercase letters\">"
    },
    {
      "id": "web-246",
      "chapter": "graphics",
      "type": "single",
      "question": "You have a flex container with multiple items that exceed the container's width.\nWhich CSS property should you set to ensure the items move to the next line instead of shrinking or overflowing?",
      "explanation": "flex-wrap:wrap permits items that cannot fit on one flex line to move onto another. flex-direction:column changes the main axis to a vertical stack rather than enabling wrapping in the intended row layout. overflow:scroll makes overflow scrollable but does not create multiple flex lines. display:block abandons Flexbox instead of configuring it. Wrapping is determined using flex item sizing rules; wrap does not globally set flex-shrink to zero, so an individually oversized item can still shrink or overflow depending on its constraints.",
      "options": [
        "flex-direction: column;",
        "flex-wrap: wrap;",
        "overflow: scroll;",
        "display: block;"
      ],
      "correct": 1
    },
    {
      "id": "web-247",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer wants to apply a blur effect of 5 pixels to an image class.\nUsing the dropdown arrow, complete the CSS rule.\n\n.blurred-image {\n\n[1]\n: \n[2]\n(5px);\n}",
      "explanation": "Use filter and blur, producing filter:blur(5px). filter is the property for visual-processing functions, and blur accepts the given length to soften detail. transform changes geometry, transition controls interpolation, and animation applies named keyframes; none accepts blur as the required filter operation in this syntax. grayscale removes saturation, sepia adds a brown tint, and brightness scales luminance. Those functions also do not take this pixel length for their amount, so they cannot complete a five-pixel blur.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter"
        },
        {
          "id": "i2",
          "text": "transform"
        },
        {
          "id": "i3",
          "text": "transition"
        },
        {
          "id": "i4",
          "text": "animation"
        },
        {
          "id": "i5",
          "text": "grayscale"
        },
        {
          "id": "i6",
          "text": "sepia"
        },
        {
          "id": "i7",
          "text": "brightness"
        },
        {
          "id": "i8",
          "text": "blur"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-248",
      "chapter": "javascript",
      "type": "single",
      "question": "In the JavaScript event flow, what is the term for the phase where an event triggers on the target element and then propagates upward to its parents (e.g., from a button up to the div containing it)?",
      "explanation": "Bubbling is outward propagation from the target through ancestors for an event whose bubbles flag allows it. Capturing is the earlier inward traversal toward the target. Hoisting describes declaration-related JavaScript behavior, not DOM event propagation. Delegation is an event-handling pattern that often takes advantage of bubbling to handle descendant interactions on an ancestor; it is not the name of the propagation phase itself. The target phase is distinct from the ancestor bubbling phase.",
      "options": [
        "Capturing",
        "Hoisting",
        "Bubbling",
        "Delegation"
      ],
      "correct": 2
    },
    {
      "id": "web-249",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer is using the Fetch API to retrieve data from a URL.\nUsing drag and drop, complete the promise chain to handle the response.",
      "explanation": "Use response.json() to consume the response body and parse JSON, returning a promise whose fulfillment value becomes data in the next then callback. The source question’s other names—parse, xml, split, and string—are not standard Response body-reading methods. The input bank had substituted blob, arrayBuffer, and text, which are real Response methods and made the unconstrained question ambiguous; the source alternatives have been restored. JSON parsing can reject for invalid data, and production code should also check response.ok and handle rejection.",
      "dragItems": [
        {
          "id": "i1",
          "text": "parse"
        },
        {
          "id": "i2",
          "text": "xml"
        },
        {
          "id": "i3",
          "text": "json"
        },
        {
          "id": "i4",
          "text": "split"
        },
        {
          "id": "i5",
          "text": "string"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4",
            "i5"
          ]
        }
      ],
      "code": "fetch(\"https://api.example.com/data\")\n  .then(response => response.[1]())\n  .then(data => console.log(data));"
    },
    {
      "id": "web-250",
      "chapter": "html-forms",
      "type": "single",
      "question": "A developer is drawing on the HTML5 Canvas and needs to move the origin (0,0) of the coordinate system to the center of the canvas.\nWhich method should be used to achieve this shift?",
      "explanation": "ctx.translate(x,y) shifts the coordinate system. For a default untransformed canvas, translate(canvas.width/2,canvas.height/2) moves the origin to its center. moveTo moves the current path position without changing the coordinate-system origin. shift is an array operation, not a canvas 2D transformation method. transform takes a full six-value affine matrix, so transform(x,y) is not a valid two-argument substitute. Translation affects subsequent drawing; save and restore can contain its effect.",
      "options": [
        "ctx.moveTo(x, y)",
        "ctx.translate(x, y)",
        "ctx.shift(x, y)",
        "ctx.transform(x, y)"
      ],
      "correct": 1
    },
    {
      "id": "web-251",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match the HTML5 input attribute to its correct function.\n\nSpecifies that the input field must be filled out before submitting: \nSpecifies a short hint that describes the expected value (e.g., \"name@example.com\"): \nSpecifies that the input field should automatically get focus when the page loads:",
      "explanation": "required makes a supported input mandatory for normal interactive submission. placeholder provides the short example hint while the control is empty, without setting the submitted value or replacing a proper label. autofocus requests initial focus when the page or relevant focus scope is shown, subject to browser behavior and competing requests. mandatory and hint are not standard attribute names for these functions. Each mapping therefore distinguishes validation, descriptive guidance, and focus management.",
      "dragItems": [
        {
          "id": "i1",
          "text": "placeholder"
        },
        {
          "id": "i2",
          "text": "required"
        },
        {
          "id": "i3",
          "text": "autofocus"
        },
        {
          "id": "i4",
          "text": "mandatory"
        },
        {
          "id": "i5",
          "text": "hint"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Specifies that the input field must be filled out before submitting:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Specifies a short hint that describes the expected value (e.g., \"name@example.com\"):",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Specifies that the input field should automatically get focus when the page loads:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-252",
      "chapter": "javascript",
      "type": "single",
      "question": "A developer needs to store temporary data that is available for the duration of the page session (as long as the browser tab is open) but is lost when the tab is closed.\nWhich storage mechanism should be used?",
      "explanation": "sessionStorage is scoped to the origin and a particular page session, normally tied to a tab. It survives reloads and same-tab navigation but normally ends when the tab closes; browser restoration features can complicate the practical lifetime. localStorage and IndexedDB are intended for longer-lived client storage, not automatic tab-session clearing. Cookies have their own expiration and scoping rules and are not generally isolated to one tab’s session. No browser store should be assumed immune to user clearing or storage policies.",
      "options": [
        "localStorage",
        "cookies",
        "sessionStorage",
        "IndexedDB"
      ],
      "correct": 2
    },
    {
      "id": "web-253",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer wants to add a 20-pixel space between all rows and columns in a CSS Grid container.\nUsing the dropdown arrow, complete the CSS property.\n\n.grid-container {\ndisplay: grid;\n\n[1]\n: 20px;\n}",
      "explanation": "gap is the grid property that sets spacing between adjacent rows and columns. With one value, gap:20px sets both row-gap and column-gap to 20px. margin affects a box’s outside spacing and padding its internal edge spacing rather than directly declaring track gutters. border-spacing controls separated table borders, not CSS Grid gaps. The outer container edge does not automatically receive an extra gap; padding can be added separately if that is desired.",
      "dragItems": [
        {
          "id": "i1",
          "text": "margin"
        },
        {
          "id": "i2",
          "text": "border-spacing"
        },
        {
          "id": "i3",
          "text": "gap"
        },
        {
          "id": "i4",
          "text": "padding"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-254",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer is defining a JavaScript class named `Rectangle`.\nUsing drag and drop, complete the code to initialize the object's properties when a new instance is created.",
      "explanation": "constructor is the class method automatically invoked during new Rectangle(...). Both remaining blanks are this, assigning height and width to the newly created instance. init and initialize would be ordinary methods and would not run automatically; function is not the constructor method name in class syntax. In browser code, self and window refer to the global object rather than the instance. super refers to parent behavior and cannot replace this for these assignments in the base class shown.",
      "dragItems": [
        {
          "id": "i1",
          "text": "init"
        },
        {
          "id": "i2",
          "text": "constructor"
        },
        {
          "id": "i3",
          "text": "function"
        },
        {
          "id": "i4",
          "text": "initialize"
        },
        {
          "id": "i5",
          "text": "this"
        },
        {
          "id": "i6",
          "text": "self"
        },
        {
          "id": "i7",
          "text": "super"
        },
        {
          "id": "i8",
          "text": "window"
        },
        {
          "id": "i9",
          "text": "self"
        },
        {
          "id": "i10",
          "text": "super"
        },
        {
          "id": "i11",
          "text": "window"
        },
        {
          "id": "i12",
          "text": "this"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "class Rectangle {\n  [1](height, width) {\n    [2].height = height;\n    [3].width = width;\n  }\n}"
    },
    {
      "id": "web-255",
      "chapter": "lifecycle",
      "type": "single",
      "question": "A software team has successfully tested their web application and resolved all critical bugs.\nThey are now ready to make the application available to end-users on a public server.\nWhich stage of the Application Lifecycle Management (ALM) process is this?",
      "explanation": "Deploy is the stage that makes the tested application available in its target environment, such as the public server. Plan establishes goals and scope, while Design specifies the solution before implementation. Maintain is ongoing support, monitoring, and updates after the release, not the initial publication described. Successful testing is a prerequisite in this simplified lifecycle, but does not itself transfer the build to the server or expose it to users.",
      "options": [
        "Maintain",
        "Deploy",
        "Design",
        "Plan"
      ],
      "correct": 1
    },
    {
      "id": "web-256",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the SVG path: move to (10, 10), then draw a straight line to (50, 50).",
      "explanation": "d is the SVG path-data attribute. M 10 10 moves to absolute coordinate (10,10), and L 50 50 adds a straight segment to absolute coordinate (50,50). A second M would move without drawing, C begins a cubic Bézier curve requiring additional coordinates, and Z closes back to the start rather than declaring this endpoint. points is used by polygon/polyline, not path. path is the element name and src is not its path-data attribute. stroke paints the line and fill=\"none\" avoids interior painting.",
      "dragItems": [
        {
          "id": "i1",
          "text": "points"
        },
        {
          "id": "i2",
          "text": "path"
        },
        {
          "id": "i3",
          "text": "src"
        },
        {
          "id": "i4",
          "text": "d"
        },
        {
          "id": "i5",
          "text": "C"
        },
        {
          "id": "i6",
          "text": "Z"
        },
        {
          "id": "i7",
          "text": "L"
        },
        {
          "id": "i8",
          "text": "M"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<svg>\n  <path [1]=\"M 10 10 [2] 50 50\" stroke=\"black\" fill=\"none\" />\n</svg>"
    },
    {
      "id": "web-257",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to use a custom font named \"MyWebFont\" located in a file named \"myfont.woff\".\nUsing drag and drop, complete the CSS `@font-face` rule.",
      "explanation": "url(\"myfont.woff\") identifies the downloadable font resource, and format(\"woff\") supplies the matching format hint. email, password, and text are not CSS source-location functions. png is an image format, while ttf and svg do not correctly describe the supplied WOFF resource. font-family inside @font-face assigns the name MyWebFont to the face; a separate rule must use that family to display text with it. Network availability, cross-origin rules, and successful decoding still govern actual loading.",
      "dragItems": [
        {
          "id": "i1",
          "text": "email"
        },
        {
          "id": "i2",
          "text": "password"
        },
        {
          "id": "i3",
          "text": "url"
        },
        {
          "id": "i4",
          "text": "text"
        },
        {
          "id": "i5",
          "text": "png"
        },
        {
          "id": "i6",
          "text": "woff"
        },
        {
          "id": "i7",
          "text": "ttf"
        },
        {
          "id": "i8",
          "text": "svg"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "@font-face {\n  font-family: \"MyWebFont\";\n  src: [1](\"myfont.woff\") format(\"[2]\");\n}"
    },
    {
      "id": "web-258",
      "chapter": "javascript",
      "type": "single",
      "question": "You are validating a form using JavaScript.\nIf the validation fails, you need to stop the form from being submitted to the server and reloading the page.\nWhich method of the event object should you call?",
      "explanation": "event.preventDefault() requests cancellation of the normal submission default action when called on the relevant cancelable event. stopPropagation only stops travel to other nodes; stopImmediatePropagation additionally stops subsequent listeners on the current node. Neither automatically cancels the default form submission. cancelBubble is a legacy propagation-control property, not the default-action cancellation method, and is not even a method call as shown. Validation code must run before submission completes and outside a passive listener when cancellation is needed.",
      "options": [
        "event.stopPropagation()",
        "event.preventDefault()",
        "event.stopImmediatePropagation()",
        "event.cancelBubble = true"
      ],
      "correct": 1
    },
    {
      "id": "web-259",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer is using the jQuery library to hide all elements with the class \"alert-box\" when a button is clicked.\nUsing drag and drop, complete the jQuery syntax.",
      "explanation": "Use $ and hide: $(\".alert-box\").hide(). With jQuery loaded and its usual $ alias available, the class selector matches all alert-box elements and hide removes their visual display. show does the opposite. removeClass and toggleClass alter class tokens rather than directly requesting this hide effect. document and window are objects, not jQuery selector functions, and query is not the library’s standard entry point. The snippet performs the action; a separate button handler must invoke it on click.",
      "dragItems": [
        {
          "id": "i1",
          "text": "$"
        },
        {
          "id": "i2",
          "text": "document"
        },
        {
          "id": "i3",
          "text": "window"
        },
        {
          "id": "i4",
          "text": "query"
        },
        {
          "id": "i5",
          "text": "removeClass"
        },
        {
          "id": "i6",
          "text": "show"
        },
        {
          "id": "i7",
          "text": "toggleClass"
        },
        {
          "id": "i8",
          "text": "hide"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "[1](\".alert-box\").[2]();"
    },
    {
      "id": "web-260",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "A developer is structuring a news article page using HTML5 semantic elements.\nUsing drag and drop, match the content description to the correct HTML tag.\n\nContainer for independent, self-contained content (like a blog post): \nContainer for introductory content (logos, navigation, headlines): \nContainer for content aside from the content it is placed in (like a sidebar):",
      "explanation": "article represents independently meaningful, self-contained content such as a news story or blog post. header contains introductory content or navigational aids for the page or section. aside contains tangentially related material, often presented as a sidebar. section groups thematic content but is not necessarily independently distributable, and footer contains concluding or contextual information rather than the requested introduction. Semantic meaning does not mandate a fixed visual position; CSS controls layout.",
      "dragItems": [
        {
          "id": "i1",
          "text": "section"
        },
        {
          "id": "i2",
          "text": "article"
        },
        {
          "id": "i3",
          "text": "header"
        },
        {
          "id": "i4",
          "text": "aside"
        },
        {
          "id": "i5",
          "text": "footer"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Container for independent, self-contained content (like a blog post):",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Container for introductory content (logos, navigation, headlines):",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Container for content aside from the content it is placed in (like a sidebar):",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "web-261",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer wants to create a background that transitions smoothly from blue at the top to green at the bottom.\nUsing the dropdown arrow, select the correct CSS function.\n\n.background {\nbackground-image: \n[1]\n(to bottom, blue, green);\n}",
      "explanation": "linear-gradient(to bottom,blue,green) creates a straight vertical color transition with blue at the top and green at the bottom. radial-gradient spreads colors outward from a center, repeating-radial-gradient repeats that radial pattern, and conic-gradient varies colors around the center by angle. Those are real gradient functions, but the shown directional keyword and desired top-to-bottom effect belong to linear-gradient. The result is a CSS image value used by background-image, not a time-based animation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "conic-gradient"
        },
        {
          "id": "i2",
          "text": "repeating-radial-gradient"
        },
        {
          "id": "i3",
          "text": "linear-gradient"
        },
        {
          "id": "i4",
          "text": "radial-gradient"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-262",
      "chapter": "javascript",
      "type": "single",
      "question": "Which attribute should be added to the `<video>` element to display the built-in play, pause, and volume buttons?",
      "explanation": "controls requests the browser’s built-in media playback interface, commonly including play/pause and volume controls, although details vary by browser and device. autoplay requests automatic playback subject to policy; it does not request the UI. loop repeats playback and muted silences the media initially. Those attributes can coexist with controls, but none substitutes for it. Boolean attributes are enabled by presence rather than requiring a literal true value.",
      "options": [
        "autoplay",
        "controls",
        "loop",
        "muted"
      ],
      "correct": 1
    },
    {
      "id": "web-263",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer is building a mobile game and needs to detect when a user first places a finger on the screen.\nUsing drag and drop, complete the event listener code.",
      "explanation": "touchstart is the Touch Events event dispatched when a contact first touches the surface, so it invokes handleStart at the intended beginning. touchend corresponds to ending contact. click represents activation and may occur later; mousedown is mouse-oriented and is not the native touch-start signal. The listener’s final false selects non-capturing registration. Pointer Events with pointerdown offer a modern cross-input alternative, but among the supplied touch-event choices touchstart directly expresses the requirement.",
      "dragItems": [
        {
          "id": "i1",
          "text": "touchstart"
        },
        {
          "id": "i2",
          "text": "click"
        },
        {
          "id": "i3",
          "text": "touchend"
        },
        {
          "id": "i4",
          "text": "mousedown"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": "canvas.addEventListener(\"[1]\", handleStart, false);"
    },
    {
      "id": "web-264",
      "chapter": "graphics",
      "type": "single",
      "question": "A developer wants to add a shadow effect around a button to give it depth.\nWhich CSS property syntax is correct for creating a black shadow with a 5px offset and blur?",
      "explanation": "box-shadow:5px 5px 5px black adds a black box shadow with a 5px rightward offset, 5px downward offset, and 5px blur radius. text-shadow would shadow the button’s text rather than the surrounding button box. border-shadow and shadow are not standard CSS properties for this purpose. A shadow changes the rendered appearance without reserving additional normal-flow space, so nearby content may need separate spacing if overlap would be undesirable.",
      "options": [
        "text-shadow: 5px 5px 5px black;",
        "box-shadow: 5px 5px 5px black;",
        "border-shadow: 5px 5px 5px black;",
        "shadow: 5px 5px 5px black;"
      ],
      "correct": 1
    },
    {
      "id": "web-265",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the two-column grid-area map. The header must span both columns in the top row, sidebar and content occupy the middle row, and the footer must span both columns in the bottom row.",
      "explanation": "Use \"header header\" for the first row and \"footer footer\" for the last. Repeating each name in both cells creates full-width rectangular regions around the existing \"sidebar content\" middle row. \"header .\" and \"footer .\" leave one cell empty, so they fail the explicit two-column spanning requirement. Alternatives mixing header/footer with sidebar or content either put regions in the wrong row or can make a repeated named region nonrectangular. Every named area must form a rectangle, and each quoted row must contain the same number of cells.",
      "dragItems": [
        {
          "id": "i1",
          "text": "header ."
        },
        {
          "id": "i2",
          "text": "sidebar header"
        },
        {
          "id": "i3",
          "text": "header header"
        },
        {
          "id": "i4",
          "text": "header sidebar"
        },
        {
          "id": "i5",
          "text": "content footer"
        },
        {
          "id": "i6",
          "text": "footer footer"
        },
        {
          "id": "i7",
          "text": "footer content"
        },
        {
          "id": "i8",
          "text": "footer ."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".container {\n  display: grid;\n  grid-template-areas:\n    \"[1]\"\n    \"sidebar content\"\n    \"[2]\";\n}"
    },
    {
      "id": "web-266",
      "chapter": "javascript",
      "type": "single",
      "question": "A developer wants to write a block of code that handles potential runtime errors gracefully.\nWhich structure should be used to \"try\" running code and \"catch\" any errors that occur?",
      "explanation": "try...catch runs a block and handles a thrown exception in the associated catch block, allowing an appropriate recovery or error message. if...else branches on a condition but does not catch exceptions. do...while repeats code, and switch...case selects among values rather than handling errors. A try/catch does not automatically intercept later asynchronous callback exceptions or unawaited promise rejections; those need error handling in the relevant asynchronous execution path.",
      "options": [
        "if...else",
        "try...catch",
        "do...while",
        "switch...case"
      ],
      "correct": 1
    },
    {
      "id": "web-267",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "The container has a heading followed by two sibling paragraphs, as shown. Select the pseudo-class that makes only the first paragraph bold, even though the heading is the first child.",
      "explanation": "first-of-type selects the first p among these siblings, so only First paragraph matches. first-child fails because the h2, not either paragraph, is the parent’s first element child. last-child selects the second paragraph in this supplied markup, and nth-of-type(2) also selects that second p. The direct-child combinator scopes the rule to paragraphs immediately inside .article, avoiding unintended first paragraphs in nested descendants. Matching is based on element type and sibling position, not the words displayed in each paragraph.",
      "dragItems": [
        {
          "id": "i1",
          "text": "first-of-type"
        },
        {
          "id": "i2",
          "text": "first-child"
        },
        {
          "id": "i3",
          "text": "last-child"
        },
        {
          "id": "i4",
          "text": "nth-of-type(2)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": "<div class=\"article\">\n  <h2>News</h2>\n  <p>First paragraph</p>\n  <p>Second paragraph</p>\n</div>\n\n.article > p:[1] { font-weight: bold; }"
    },
    {
      "id": "web-268",
      "chapter": "javascript",
      "type": "single",
      "question": "What is the primary difference between `localStorage` and `sessionStorage` regarding data persistence?",
      "explanation": "localStorage has no built-in per-entry expiration and normally survives closing and reopening the browser. sessionStorage is tied to a page session and normally ends when its tab is closed. Both are client-side stores, so the server-versus-client answer is false. Storage quotas are browser-dependent, not a general guarantee that sessionStorage is larger, and both APIs are supported beyond Chrome. Persistent does not mean permanent: users, privacy policies, quota management, and browser restoration behavior can affect retention.",
      "options": [
        "localStorage data is stored on the server, while sessionStorage is stored on the client.",
        "localStorage data has no expiration time, while sessionStorage data is cleared when the page session ends.",
        "sessionStorage can store larger amounts of data than localStorage.",
        "localStorage is only available in Chrome, while sessionStorage is cross-browser."
      ],
      "correct": 1
    },
    {
      "id": "web-269",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to apply a 3D perspective to a container to give depth to its children's 3D transformations.\nUsing drag and drop, complete the CSS rule.",
      "explanation": "perspective:1000px sets the viewer distance used to project transformed descendants in 3D. It supplies the requested depth effect without itself moving a child along z. z-index controls stacking order rather than perspective projection. opacity controls compositing and does not accept a pixel distance. transform-style takes values such as flat or preserve-3d and controls 3D descendant flattening, not the viewer distance. Smaller positive perspective distances generally produce stronger apparent depth.",
      "dragItems": [
        {
          "id": "i1",
          "text": "z-index"
        },
        {
          "id": "i2",
          "text": "opacity"
        },
        {
          "id": "i3",
          "text": "perspective"
        },
        {
          "id": "i4",
          "text": "transform-style"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": ".scene { [1]: 1000px; }"
    },
    {
      "id": "web-270",
      "chapter": "javascript",
      "type": "single",
      "question": "You have the following markup. Line numbers are for reference only.\n\n01 <!DOCTYPE html>\n02 <html>\n03 <body>\n04 <p id=\"output\"></p>\n05 <script>\n06 var employee = '{ \"empID\": \"SH99\", \"firstName\": \"Alice\", \"lastName\": \"Smith\", \"email\": \"alice@company.com\" }';\n07\n08 </script>\n09 </body>\n10 </html>\n\nWhich script can you add at line 07 to correctly display the employee ID in the\nparagraph?",
      "explanation": "Parse employee with JSON.parse, then read data.empID and assign \"ID: \" plus that value to the paragraph selected by getElementById. The displayed result is ID: SH99. stringify serializes instead of parsing; employee itself is a string and does not expose the JSON field as a property. A bare empID variable is not declared, and getElementsByClassName returns a collection rather than this ID-selected paragraph. The source’s wrapped single-quoted JSON string has been joined onto one line so it is valid JavaScript rather than an unterminated literal.",
      "options": [
        "var data = JSON.stringify(employee); document.getElementById(\"output\").innerHTML = \"ID: \" + employee.empID;",
        "var data = JSON.parse(employee); document.getElementById(\"output\").innerHTML = \"ID: \" + empID;",
        "var data = JSON.stringify(employee); document.getElementsByClassName(\"output\").innerHTML = \"ID: \" + data.empID;",
        "var data = JSON.parse(employee); document.getElementById(\"output\").innerHTML = \"ID: \" + data.empID;"
      ],
      "correct": 3
    },
    {
      "id": "web-271",
      "chapter": "javascript",
      "type": "single",
      "question": "Which JavaScript method is commonly used to create a circular arc or a full circle when\ndrawing on a canvas element?",
      "explanation": "arc is the conventional CanvasRenderingContext2D method for a circular arc, taking center, radius, start angle, end angle, and optional direction. A sweep of 2π forms a full circle. ellipse can also form a circle when its two radii are equal, so it is not incapable of circles, but arc is the direct common circular-arc method being asked for. bezierCurveTo describes a cubic Bézier segment, and drawCircle is not a standard 2D context method. Path construction still needs a painting operation to become visible.",
      "options": [
        "ellipse",
        "bezierCurveTo",
        "arc",
        "drawCircle"
      ],
      "correct": 2
    },
    {
      "id": "web-272",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Identify the correct sequence of the software development lifecycle stages.\nFor each stage, select the appropriate phase from the list.\n\nStage 1: \n[1]\n\nStage 2: \n[2]\n\nStage 3: \n[3]\n\nStage 4: \n[4]\n\nStage 5: \n[5]\n\nStage 6: \n[6]",
      "explanation": "The six stages are Plan, Design, Develop, Test, Deploy, and Maintain. Planning defines goals and requirements, design specifies the solution, development implements it, testing validates it, deployment releases it, and maintenance supports it afterward. Each dropdown therefore takes the corresponding stage in that sequence rather than repeating earlier stages or jumping straight to release. This is a simplified lifecycle model: real development can loop back after testing or new requirements, but that does not change the requested model order.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Plan"
        },
        {
          "id": "i2",
          "text": "Design"
        },
        {
          "id": "i3",
          "text": "Develop"
        },
        {
          "id": "i4",
          "text": "Test"
        },
        {
          "id": "i5",
          "text": "Plan"
        },
        {
          "id": "i6",
          "text": "Develop"
        },
        {
          "id": "i7",
          "text": "Test"
        },
        {
          "id": "i8",
          "text": "Design"
        },
        {
          "id": "i9",
          "text": "Design"
        },
        {
          "id": "i10",
          "text": "Test"
        },
        {
          "id": "i11",
          "text": "Develop"
        },
        {
          "id": "i12",
          "text": "Plan"
        },
        {
          "id": "i13",
          "text": "Develop"
        },
        {
          "id": "i14",
          "text": "Test"
        },
        {
          "id": "i15",
          "text": "Plan"
        },
        {
          "id": "i16",
          "text": "Design"
        },
        {
          "id": "i17",
          "text": "Deploy"
        },
        {
          "id": "i18",
          "text": "Plan"
        },
        {
          "id": "i19",
          "text": "Design"
        },
        {
          "id": "i20",
          "text": "Develop"
        },
        {
          "id": "i21",
          "text": "Plan"
        },
        {
          "id": "i22",
          "text": "Design"
        },
        {
          "id": "i23",
          "text": "Develop"
        },
        {
          "id": "i24",
          "text": "Maintain"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i17",
          "optionIds": [
            "i17",
            "i18",
            "i19",
            "i20"
          ]
        },
        {
          "id": "z6",
          "label": "Blank [6]",
          "correctItemId": "i24",
          "optionIds": [
            "i21",
            "i22",
            "i23",
            "i24"
          ]
        }
      ]
    },
    {
      "id": "web-273",
      "chapter": "css-layout",
      "type": "multiple",
      "question": "You are designing a container with fixed dimensions.\nWhich two values for the CSS 'overflow' property will result in a scroll bar being\ndisplayed (either always or only when needed) if the content exceeds the container size?\n(Choose 2)",
      "explanation": "scroll and auto both enable user scrolling when content exceeds the container. scroll requests scrollbars regardless of whether overflow currently exists, while auto makes them conditional on need; actual overlay-bar visibility is platform-dependent. visible lets content paint outside the box instead of providing this scroll interface. hidden clips without user-visible scrollbars, even though programmatic scrolling can still be possible. The question explicitly asks about displayed user scrollbars, not every value that can create a scroll container.",
      "options": [
        "scroll",
        "visible",
        "hidden",
        "auto"
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "web-274",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You need to debug the code below to determine the state of the 'inventory' array at\nspecific points.\nThe initial arrays are defined as follows:\nvar tools = [\"Hammer\", \"Drill\", \"Saw\", \"Level\", \"Pliers\", \"Wrench\"]; // 6 items\nvar parts = [\"Nails\", \"Bolts\", \"Screws\", \"Washers\", \"Nuts\"]; // 5 items\nvar inventory = [];\n\n01 function addParts() {\n02 inventory = inventory.concat(parts);\n03 }\n04 function addTools() {\n05 inventory = inventory.concat(tools);\n06 }\n07\n08 tools.shift();\n09 addParts();\n10 // Breakpoint A\n11\n12 inventory.shift();\n13 addTools();\n14 // Breakpoint B\n15\n16 inventory.pop();\n17 inventory.shift();\n18 // Breakpoint C\n\n[1]\n\n[2]\n\n[3]",
      "explanation": "tools.shift removes Hammer from tools, leaving five tools; it does not change the initially empty inventory. addParts copies five parts, so breakpoint A has 5 entries. inventory.shift removes one, leaving 4, then addTools adds five, producing 9 at breakpoint B. inventory.pop and the next shift each remove one, leaving 7 at breakpoint C. concat returns a new array and the assignment preserves that result. Counts such as zero, one, or two ignore the concatenated arrays or count operations instead of entries.",
      "dragItems": [
        {
          "id": "i1",
          "text": "1"
        },
        {
          "id": "i2",
          "text": "2"
        },
        {
          "id": "i3",
          "text": "5"
        },
        {
          "id": "i4",
          "text": "0"
        },
        {
          "id": "i5",
          "text": "2"
        },
        {
          "id": "i6",
          "text": "9"
        },
        {
          "id": "i7",
          "text": "0"
        },
        {
          "id": "i8",
          "text": "1"
        },
        {
          "id": "i9",
          "text": "7"
        },
        {
          "id": "i10",
          "text": "0"
        },
        {
          "id": "i11",
          "text": "1"
        },
        {
          "id": "i12",
          "text": "2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Number of inventory entries at breakpoint A",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Number of inventory entries at breakpoint B",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Number of inventory entries at breakpoint C",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-275",
      "chapter": "graphics",
      "type": "single",
      "question": "In this self-contained canvas exercise, the untransformed coordinate origin is at the top-left and one drawing unit equals one CSS pixel. The inner square’s top-left corner is given to be 50 units right and 50 units down from that origin. Which (x,y) pair represents its top-left corner? The image is illustrative only; do not infer its original numeric scale.",
      "explanation": "The given horizontal displacement is 50 and the given vertical displacement is 50, so the pair is (50,50). In the default canvas axes, x increases rightward and y increases downward. (0,0) would place the corner at the origin. (0,50) supplies the downward offset but no rightward offset, and (50,0) supplies the rightward offset but no downward offset. The exercise explicitly supplies both numerical displacements; neither the original canvas dimensions nor a scale measured from the illustration is needed or assumed.",
      "options": [
        "0, 0",
        "0, 50",
        "50, 0",
        "50, 50"
      ],
      "correct": 3,
      "image": "assets/html5/pdf-106-canvas-square.png"
    },
    {
      "id": "web-276",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are developing a user form that requires a specific Region Code.\nThe requirement states that the code must be a minimum of 2 characters and a maximum of\n3 characters.\nAdditionally, the user must provide a value; the field cannot be left empty.\n\nComplete the markup below to enforce these validation rules.\n\n<label for=\"region\">Region Code:</label>\n<input type=\"text\" id=\"region\" name=\"region\" \n[1]\n =\"2\" \n[2]\n =\"3\" \n[3]\n >",
      "explanation": "Use minlength=\"2\", maxlength=\"3\", and required. minlength defines the minimum permitted length for a user-entered nonempty value, maxlength limits ordinary user entry to three, and required rejects leaving it empty. placeholder is a hint rather than a constraint, and a bare numeric pattern value would not express these length bounds. disabled or readonly would prevent normal editing rather than require a provided value; multiple does not enforce this textual length rule. Server-side validation is still necessary for untrusted submissions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "minlength"
        },
        {
          "id": "i2",
          "text": "maxlength"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "placeholder"
        },
        {
          "id": "i5",
          "text": "minlength"
        },
        {
          "id": "i6",
          "text": "pattern"
        },
        {
          "id": "i7",
          "text": "placeholder"
        },
        {
          "id": "i8",
          "text": "maxlength"
        },
        {
          "id": "i9",
          "text": "disabled"
        },
        {
          "id": "i10",
          "text": "multiple"
        },
        {
          "id": "i11",
          "text": "required"
        },
        {
          "id": "i12",
          "text": "readonly"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-277",
      "chapter": "html-forms",
      "type": "multiple",
      "question": "You are applying specific visual effects to a div element using CSS3.\nWhich two functions are valid values for the 'transform' property to perform 2D\nmanipulations? (Choose 2)",
      "explanation": "skew() and matrix() are the valid 2D CSS transform function families. skew shears geometry, while matrix supplies the six affine coefficients used for a combined planar transformation. Actual CSS calls require appropriate arguments; the choices identify function names. scroll, move, and zoom are not functions of the CSS transform value grammar. Movement normally uses translate and resizing uses scale, so intuitive English verbs are not interchangeable with the standardized syntax.",
      "options": [
        "skew()",
        "scroll()",
        "move()",
        "zoom()",
        "matrix()"
      ],
      "correct": [
        0,
        4
      ]
    },
    {
      "id": "web-278",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You need to complete the code for a secure inventory system form that must meet the\nfollowing criteria:\n\n* The Security Key must be 6-8 characters long and use only letters and numbers.\n* The Tracking Number must follow the pattern ###-##-####.\n\nComplete the markup by selecting the correct option from each drop-down list.\n\n<label for=\"key\"><b>Security Key</b></label>\n<input type=\"password\" placeholder=\"Enter Key\" name=\"key\" required \n[1]\n =\"\n[2]\n\" >\n<label for=\"tracking\"><b>Tracking Number:</b></label>\n<input type=\"text\" id=\"tracking\" name=\"tracking\" placeholder=\"123-45-6789\" \n[3]\n >",
      "explanation": "Use pattern with [A-Za-z0-9]{6,8} for the required Security Key. The character class allows ASCII letters and digits and the quantifier permits six through eight characters. The Tracking Number blank takes the complete pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{4}\" attribute, enforcing its digit groups and hyphens for nonempty values. Length attributes alone do not restrict characters, and placeholder only hints. The tracking field lacks required, so it can remain empty; the key field is explicitly mandatory. The key label also lacks a matching input id, an accessibility issue separate from the chosen patterns.",
      "dragItems": [
        {
          "id": "i1",
          "text": "maxlength"
        },
        {
          "id": "i2",
          "text": "placeholder"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "minlength"
        },
        {
          "id": "i5",
          "text": "[A-Za-z0-9]{6,8}"
        },
        {
          "id": "i6",
          "text": "pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{4}\""
        },
        {
          "id": "i7",
          "text": "pattern"
        },
        {
          "id": "i8",
          "text": "pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{4}\""
        },
        {
          "id": "i9",
          "text": "pattern"
        },
        {
          "id": "i10",
          "text": "[A-Za-z0-9]{6,8}"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i8",
            "i9",
            "i10"
          ]
        }
      ]
    },
    {
      "id": "web-279",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "You are structuring a user dashboard form using HTML5 semantic elements.\nMatch each semantic tag to the correct component numbered 1 through 4 in the interface\ndescription below.\n\n1. The visual gauge showing a bounded scalar measurement. \n2. The caption text \"Subscription Details\" that interrupts the border of the group. \n3. The pre-defined list of suggestions attached to the \"Choose delivery frequency\" input\nfield. \n4. The box container grouping the \"Delivery Address\" section together.",
      "explanation": "The numbered gauge is meter because the stem identifies a bounded scalar measurement. The caption crossing the group border is legend. The explicitly described suggestion list is datalist, associated with an editable input rather than a restricted select menu. The Delivery Address group container is fieldset. output is unused because it represents a calculated or action result rather than a form-group wrapper, caption, suggestion source, or bounded gauge. The screenshot alone cannot distinguish datalist from all similarly styled widgets; the textual suggestion-list requirement establishes that mapping, and no exact gauge unit is inferred from the unclear label.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<meter>"
        },
        {
          "id": "i2",
          "text": "<legend>"
        },
        {
          "id": "i3",
          "text": "<datalist>"
        },
        {
          "id": "i4",
          "text": "<fieldset>"
        },
        {
          "id": "i5",
          "text": "<output>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1. Bounded scalar gauge",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "2. Caption interrupting the fieldset border",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "3. Suggestions for the delivery-frequency input",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "4. Container grouping Delivery Address controls",
          "correctItemId": "i4"
        }
      ],
      "image": "assets/html5/pdf-107-ocean-fresh-form.png"
    },
    {
      "id": "web-280",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You define the User class as follows:\n\nclass User {\nconstructor(username) {\nthis.username = username;\nthis.sayHello = function() {\nreturn \"Hello \" + this.username;\n};\n}\n}\n\nYou need to derive an Admin class from the User class.\nComplete the code by selecting the correct option from each drop-down list.\n\nclass Admin \n[1]\n User {\nconstructor(username, permissions) {\n\n[2]\n (username);\nthis.permissions = permissions;\n}\n}",
      "explanation": "Use extends to declare Admin as a subclass of User, then super(username) to initialize the inherited instance before assigning this.permissions. The User constructor stores username and creates sayHello as an own function-valued property, so Admin instances receive that behavior through parent construction. inherits and implements are not JavaScript inheritance keywords, and prototype is a property name rather than the class-header keyword. this cannot be called in place of super here; self and window refer to browser globals rather than the parent constructor.",
      "dragItems": [
        {
          "id": "i1",
          "text": "extends"
        },
        {
          "id": "i2",
          "text": "inherits"
        },
        {
          "id": "i3",
          "text": "implements"
        },
        {
          "id": "i4",
          "text": "prototype"
        },
        {
          "id": "i5",
          "text": "this"
        },
        {
          "id": "i6",
          "text": "self"
        },
        {
          "id": "i7",
          "text": "window"
        },
        {
          "id": "i8",
          "text": "super"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-281",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "You are designing a responsive photo gallery using CSS Grid. The design requirements are\nas follows:\n\n* The grid must contain 6 equal columns, each taking up 1 fraction of the available\nwidth.\n* There are 5 rows with specific varied heights.\n* The layout requires a 10px spacing between rows and a 15px spacing between columns.\nComplete the CSS rule for the gallery container.\n\n.gallery-container {\ndisplay: grid;\n\n[1]\n : \n[2]\n (6, 1fr);\n\n[3]\n : 50px 50px 150px 150px 100px;\n\n[4]\n : 10px 15px;\n}",
      "explanation": "Use grid-template-columns:repeat(6,1fr), grid-template-rows:50px 50px 150px 150px 100px, and gap:10px 15px. repeat generates six equal fractional tracks; the row declaration lists all five specified heights, and the two gap values mean row gap first, column gap second. calc performs arithmetic, fit-content limits a track size, and minmax expresses bounds rather than repeating tracks. grid-area assigns placement, grid-template-areas maps names, and grid-auto-flow controls automatic placement, not these dimensions. Margins, padding, and table border-spacing are not substitutes for grid gutters.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid-area"
        },
        {
          "id": "i2",
          "text": "grid-template-areas"
        },
        {
          "id": "i3",
          "text": "grid-auto-flow"
        },
        {
          "id": "i4",
          "text": "grid-template-columns"
        },
        {
          "id": "i5",
          "text": "calc"
        },
        {
          "id": "i6",
          "text": "fit-content"
        },
        {
          "id": "i7",
          "text": "repeat"
        },
        {
          "id": "i8",
          "text": "minmax"
        },
        {
          "id": "i9",
          "text": "grid-auto-flow"
        },
        {
          "id": "i10",
          "text": "grid-template-rows"
        },
        {
          "id": "i11",
          "text": "grid-template-columns"
        },
        {
          "id": "i12",
          "text": "grid-template-areas"
        },
        {
          "id": "i13",
          "text": "gap"
        },
        {
          "id": "i14",
          "text": "padding"
        },
        {
          "id": "i15",
          "text": "margin"
        },
        {
          "id": "i16",
          "text": "border-spacing"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "web-282",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Attach processData as a click listener to every .action-btn button using non-capturing registration. Use the lowercase Boolean capture flag. For a direct click on the button, this listener runs in the target phase; if a descendant is the click target, the button listener runs during bubbling.\n\nComplete the code:",
      "explanation": "Use \"click\", processData, and false. The first argument names the event, the second passes the function reference, and the third disables capture. A direct button-target click invokes this listener in the target phase, not the bubbling phase. When a descendant is targeted and the event bubbles, the listener on its button ancestor runs during bubbling. true registers a capturing listener and fails the stated non-capturing requirement. Capitalized True and False are identifiers, not Boolean literals. Passing false or an event-name string instead of the callback also fails the required argument roles.",
      "dragItems": [
        {
          "id": "i1",
          "text": "processData"
        },
        {
          "id": "i2",
          "text": "false"
        },
        {
          "id": "i3",
          "text": "\"click\""
        },
        {
          "id": "i4",
          "text": "false"
        },
        {
          "id": "i5",
          "text": "\"click\""
        },
        {
          "id": "i6",
          "text": "processData"
        },
        {
          "id": "i7",
          "text": "false"
        },
        {
          "id": "i8",
          "text": "true"
        },
        {
          "id": "i9",
          "text": "True"
        },
        {
          "id": "i10",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i7",
          "optionIds": [
            "i7",
            "i8",
            "i9",
            "i10"
          ]
        }
      ],
      "code": "var buttons = document.querySelectorAll(\".action-btn\");\nfor (var i = 0; i < buttons.length; i++) {\n  var btn = buttons[i];\n  btn.addEventListener([1], [2], [3]);\n}"
    },
    {
      "id": "web-283",
      "chapter": "javascript",
      "type": "single",
      "question": "You are working with the Web Storage API.\nWhat specific information is assigned to the variable 'entryCount' after executing the\nfollowing line of JavaScript code?\n\nvar entryCount = localStorage.length;",
      "explanation": "Storage.length reports the number of stored key/value entries in that storage area. Adding or removing a key changes this count, while replacing an existing key’s value does not. It is not the byte quota or character count; a single large value still contributes one entry. localStorage also has no built-in session-expiration timestamp for length to return. Access remains origin-scoped and subject to browser policy, so this is the count visible through the current localStorage object.",
      "options": [
        "The total number of key/value pairs currently stored.",
        "The maximum storage capacity in bytes.",
        "The number of characters in the stored data.",
        "The expiration time of the local storage session."
      ],
      "correct": 0
    },
    {
      "id": "web-284",
      "chapter": "graphics",
      "type": "single",
      "question": "Which markup segment correctly creates an SVG ellipse?",
      "explanation": "The second option supplies the correct ellipse geometry: cx=150, cy=100, rx=80, and ry=40, plus a purple fill within a specified SVG viewport. An ellipse uses center coordinates and two radii, not rectangle-style width/height. The first uses x/y instead of the intended center attributes; those do not position an ellipse as requested by the example pattern, though defaults can still cause a partly visible ellipse at (0,0). The third and fourth fail to provide the intended radii. The key identifies complete conforming geometry rather than merely any markup that might paint a fragment.",
      "options": [
        "<svg><ellipse x=\"150\" y=\"100\" rx=\"80\" ry=\"40\" /></svg>",
        "<svg height=\"200\" width=\"400\"><ellipse cx=\"150\" cy=\"100\" rx=\"80\" ry=\"40\" fill=\"purple\" /></svg>",
        "<svg><ellipse cx=\"150\" cy=\"100\" x=\"80\" y=\"40\" /></svg>",
        "<svg><ellipse x=\"150\" y=\"100\" width=\"80\" height=\"40\" /></svg>"
      ],
      "correct": 1
    },
    {
      "id": "web-285",
      "chapter": "css-layout",
      "type": "single",
      "question": "You are configuring a CSS Grid container and want to define the layout structure by\nreferencing specific named regions (e.g., \"header\", \"sidebar\", \"content\", \"footer\").\nWhich CSS property allows you to create this visual map of grid areas?",
      "explanation": "grid-template-areas defines the container’s visual map as quoted rows of named cells. Repeating a name across a rectangular region creates a spanning named area. grid-area on an item assigns that item to an area or specifies placement lines; it does not define the full template map. grid-definition and grid-map are not standard CSS properties. Track sizes can be supplied separately with grid-template-columns and grid-template-rows, so naming regions does not itself require fixed dimensions.",
      "options": [
        "grid-template-areas",
        "grid-area",
        "grid-definition",
        "grid-map"
      ],
      "correct": 0
    },
    {
      "id": "web-286",
      "chapter": "css-effects",
      "type": "single",
      "question": "You are writing the CSS for an animation.\nReview the following code snippet:\n\n@keyframes slideDown {\n/* Missing code here */\n100% {\ntop: 300px;\n}\n}\n\nYou need to animate the object so that it moves down the screen from a starting position\nof 50 pixels.\nWhich CSS code segment should you insert at the beginning of the keyframes rule?",
      "explanation": "Insert 0% { top:50px; } to establish the starting top offset, followed by the supplied 100% { top:300px; } endpoint. The animation then interpolates over a 250px downward difference for a normally positioned element where top applies. A 50% rule defines the midpoint, not the required start. Another 100% rule defines an endpoint rather than the beginning, and top:0px starts at the wrong position. The element must reference this animation and have an appropriate positioning mode for top to visibly move it.",
      "options": [
        "0% { top: 50px; }",
        "50% { top: 150px; }",
        "100% { top: 50px; }",
        "0% { top: 0px; }"
      ],
      "correct": 0
    },
    {
      "id": "web-287",
      "chapter": "css-layout",
      "type": "single",
      "question": "You are creating a responsive web page design.\nYou need the background image to automatically scale to fill the entire container area,\neven if it means cropping part of the image.\n\nWhich CSS property value should you use?",
      "explanation": "background-size:cover scales the image uniformly until it covers the whole positioning area, accepting cropping where aspect ratios differ. contain instead fits the whole image inside and can leave empty space. auto follows intrinsic image sizing rules rather than guaranteeing coverage. A fixed 1200px width cannot adapt to every container size or guarantee the requested coverage. Other properties, such as background-position and background-repeat, govern placement and tiling independently of this sizing choice.",
      "options": [
        "background-size: cover;",
        "background-size: contain;",
        "background-size: auto;",
        "background-size: 1200px;"
      ],
      "correct": 0
    },
    {
      "id": "web-288",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete a responsive SVG logo with a red 300-by-300-unit square and a centered yellow circle of radius 60 units. At its nominal size, units correspond to CSS pixels. The supplied CSS caps its width at 300px and shrinks it to fit a narrower containing block while preserving its square aspect ratio. The containing block follows the page width.",
      "explanation": "Open svg with the responsive-logo class and a 300-by-300 viewBox, draw the rect at (0,0) with width and height 300, draw the circle at (150,150) with radius 60, then close svg. The center uses half of each square dimension. The supplied CSS overrides the presentational width and height: width:100% with max-width:300px fits narrower containers, while height:auto and the square viewBox preserve aspect ratio. Closing-tag-shaped options cannot open shapes, and input/option are unrelated controls. The CSS supplies actual responsiveness; the viewBox alone would not resize a fixed-size viewport.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<svg class=\"responsive-logo\" viewBox=\"0 0 300 300\" width=\"300\" height=\"300\">"
        },
        {
          "id": "i2",
          "text": "</svg viewBox=\"0 0 300 300\" width=\"300\" height=\"300\">"
        },
        {
          "id": "i3",
          "text": "<input>"
        },
        {
          "id": "i4",
          "text": "<option>"
        },
        {
          "id": "i5",
          "text": "</rect x=\"0\" y=\"0\" width=\"300\" height=\"300\""
        },
        {
          "id": "i6",
          "text": "<input>"
        },
        {
          "id": "i7",
          "text": "<option>"
        },
        {
          "id": "i8",
          "text": "<rect x=\"0\" y=\"0\" width=\"300\" height=\"300\""
        },
        {
          "id": "i9",
          "text": "<input>"
        },
        {
          "id": "i10",
          "text": "<option>"
        },
        {
          "id": "i11",
          "text": "<circle cx=\"150\" cy=\"150\" r=\"60\""
        },
        {
          "id": "i12",
          "text": "</circle cx=\"150\" cy=\"150\" r=\"60\""
        },
        {
          "id": "i13",
          "text": "</option>"
        },
        {
          "id": "i14",
          "text": "</svg>"
        },
        {
          "id": "i15",
          "text": "<svg>"
        },
        {
          "id": "i16",
          "text": "</input>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ],
      "code": "<style>\n.responsive-logo {\n  display: block;\n  width: 100%;\n  max-width: 300px;\n  height: auto;\n}\n</style>\n[1]\n  [2] fill=\"red\" />\n  [3] fill=\"yellow\" />\n[4]"
    },
    {
      "id": "web-289",
      "chapter": "javascript",
      "type": "single",
      "question": "You are writing a JavaScript validation function for a user registration page.\nWhen the user clicks the \"Sign Up\" button, your script detects that the \"Password\" and\n\"Confirm Password\" fields do not match.\n\nYou need to stop the browser from submitting the form so the user can correct the\nmistake without the page reloading.\nWhich method of the event object should you call?",
      "explanation": "preventDefault cancels the default submission action on the relevant cancelable event, keeping the page available to correct the mismatched passwords. stopPropagation prevents travel to other nodes and stopImmediatePropagation also stops later listeners at the current node, but neither inherently cancels default submission. return true is not an event-object method and normally does not prevent submission. The validation handler must run before navigation; server-side validation is still needed because client checks can be bypassed.",
      "options": [
        "preventDefault()",
        "stopPropagation()",
        "stopImmediatePropagation()",
        "return true"
      ],
      "correct": 0
    },
    {
      "id": "web-290",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "You are developing a weather application.\nYou need to retrieve the user's current geographic location to display the local\nforecast.\nThe code must first check if the browser supports geolocation, and then request the\ncurrent position once.\n\nComplete the code by selecting the correct option from each drop-down list.\n\nif ( \n[1]\n ) {\n\n[2]\n . \n[3]\n ;\n}\n\nfunction showWeather(position) {\nconsole.log(\"Lat: \" + position.coords.latitude);\n}",
      "explanation": "First test navigator.geolocation for availability, then call navigator.geolocation.getCurrentPosition(showWeather). geolocation is an object, not a function, and :: is not JavaScript property-access syntax. Assigning None is neither a valid feature check nor appropriate JavaScript here. The final argument must be the function reference, not its quoted name; getCurrentPosition() without the required callback is incomplete and square brackets would access a property rather than invoke this method. Availability does not guarantee permission or a successful location result; modern use generally requires HTTPS and error handling.",
      "dragItems": [
        {
          "id": "i1",
          "text": "navigator.geolocation()"
        },
        {
          "id": "i2",
          "text": "navigator.geolocation = None"
        },
        {
          "id": "i3",
          "text": "navigator.geolocation"
        },
        {
          "id": "i4",
          "text": "navigator::geolocation"
        },
        {
          "id": "i5",
          "text": "navigator.geolocation = None"
        },
        {
          "id": "i6",
          "text": "navigator.geolocation"
        },
        {
          "id": "i7",
          "text": "navigator::geolocation"
        },
        {
          "id": "i8",
          "text": "navigator.geolocation()"
        },
        {
          "id": "i9",
          "text": "getCurrentPosition(showWeather)"
        },
        {
          "id": "i10",
          "text": "getCurrentPosition[showWeather]"
        },
        {
          "id": "i11",
          "text": "getCurrentPosition()"
        },
        {
          "id": "i12",
          "text": "getCurrentPosition(\"showWeather\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-291",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "The following form is used for shipping details but is missing validation attributes:\nform\nlabel for=\"address\" Delivery Address /label\ninput type=\"text\" id=\"address\" name=\"address\"\n\nlabel for=\"zip\" Zip Code /label\ninput type=\"text\" id=\"zip\" name=\"zip\" placeholder=\"12345\"\n\nlabel for=\"tracking\" Tracking Code /label\ninput type=\"text\" id=\"tracking\" name=\"tracking\" placeholder=\"AA-123456\"\n/form\n\nYou need to update the form to enforce the following requirements:\n1. All fields must be completed with valid information before submission.\n2. The user should not be allowed to type more than 5 characters into the Zip Code\nfield.\n3. The Tracking Code must strictly follow the configuration of the placeholder text\nusing a regular expression.\n\nComplete the sentences by selecting the correct option from each drop-down list.\n\nThe required attribute is needed for \n[1]\n of the input elements.\nThe Zip Code field requires the \n[2]\n attribute.\nA completed pattern attribute is needed for the \n[3]\n field.",
      "explanation": "All three fields need required because each must be nonempty. The Zip Code needs maxlength=\"5\" to limit ordinary typed or pasted text to five characters; minlength sets a lower bound rather than preventing extra entry. Tracking Code needs a pattern matching two uppercase letters, a hyphen, and six digits, such as [A-Z]{2}-[0-9]{6}. placeholder only shows an example and enforces nothing. These rules do not prove a real postal address exists or that the ZIP contains digits unless separate validation supplies those requirements.",
      "dragItems": [
        {
          "id": "i1",
          "text": "none"
        },
        {
          "id": "i2",
          "text": "all three"
        },
        {
          "id": "i3",
          "text": "only the first"
        },
        {
          "id": "i4",
          "text": "only the second"
        },
        {
          "id": "i5",
          "text": "maxlength"
        },
        {
          "id": "i6",
          "text": "minlength"
        },
        {
          "id": "i7",
          "text": "pattern"
        },
        {
          "id": "i8",
          "text": "placeholder"
        },
        {
          "id": "i9",
          "text": "all three"
        },
        {
          "id": "i10",
          "text": "maxlength"
        },
        {
          "id": "i11",
          "text": "Tracking Code"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "web-292",
      "chapter": "javascript",
      "type": "multiple",
      "question": "You are designing a digital kiosk interface for a touch-screen display.\nDuring testing, you notice that users often have to tap several times before a button\nclick is registered, and sometimes the wrong action is triggered.\n\nWhat are two possible causes for this behavior? (Select 2)",
      "explanation": "Small touch targets make finger input difficult to place accurately, while overlapping transparent containers can intercept pointer/touch hit testing even though they are not visibly opaque. Both can explain missed or wrong actions. A device-pixel resolution greater than CSS viewport width is normal on high-density screens and is not itself a fault. Standard clickable controls and click listeners generally work with touch-generated activation too; a mouse-oriented listener is not automatically the cause. Diagnose event targeting and overlap rather than assuming every touch interface requires only touch-specific events.",
      "options": [
        "The touch target areas are too small for reliable finger input.",
        "The input elements overlap with other transparent containers.",
        "The screen resolution is higher than the CSS viewport width.",
        "The device is using a mouse event listener instead of a touch listener."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "web-293",
      "chapter": "javascript",
      "type": "single",
      "question": "Which constructor initializes the public displayName property so that the following code works?",
      "explanation": "The first constructor assigns first, last, and displayName to this, the object created by new Employee. It produces displayName=\"Alice Smith\", so the log reads Alice Smith has been registered. The second assigns bare variables rather than instance properties and may throw or leak globals. var Employee(first,last) is not valid function declaration syntax. An object literal is not this callable constructor and also references first/last without defining them. The sample’s bare worker assignment should be declared with let/const in strict or module code, but that does not change which constructor initializes the instance correctly.",
      "options": [
        "function Employee(first, last) { this.first = first; this.last = last; this.displayName = this.first + \" \" + this.last; }",
        "function Employee(first, last) { first = first; last = last; displayName = first + \" \" + last; }",
        "var Employee(first, last) { this.first = first; this.last = last; this.displayName = this.first + \" \" + this.last; }",
        "Employee = { first: \"\", last: \"\", displayName: first + \" \" + last }"
      ],
      "correct": 0,
      "code": "worker = new Employee(\"Alice\", \"Smith\");\nconsole.log(worker.displayName + \" has been registered.\");"
    },
    {
      "id": "web-294",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are building a newsletter subscription form.\nYou need to organize the HTML segments in the correct order to ensure the form is valid\nand properly structured with a fieldset and a legend.",
      "explanation": "Open form, open fieldset, insert <legend>Newsletter</legend>, then close fieldset and close form. The email control and submit button remain inside the fieldset and the form, while legend supplies the group caption. An opening legend without a matching close or a closing tag used as an opening would break the intended structure. input and option cannot replace the fieldset caption. This ordering establishes proper nesting and keeps the required email field available for ordinary form validation on submission.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<legend>"
        },
        {
          "id": "i2",
          "text": "</legend>"
        },
        {
          "id": "i3",
          "text": "<form>"
        },
        {
          "id": "i4",
          "text": "<fieldset>"
        },
        {
          "id": "i5",
          "text": "</fieldset>"
        },
        {
          "id": "i6",
          "text": "<fieldset>"
        },
        {
          "id": "i7",
          "text": "<legend>"
        },
        {
          "id": "i8",
          "text": "</legend>"
        },
        {
          "id": "i9",
          "text": "<legend>Newsletter</legend>"
        },
        {
          "id": "i10",
          "text": "</legend>Newsletter</legend>"
        },
        {
          "id": "i11",
          "text": "<input>"
        },
        {
          "id": "i12",
          "text": "<option>"
        },
        {
          "id": "i13",
          "text": "<fieldset>"
        },
        {
          "id": "i14",
          "text": "<legend>"
        },
        {
          "id": "i15",
          "text": "</legend>"
        },
        {
          "id": "i16",
          "text": "</fieldset>"
        },
        {
          "id": "i17",
          "text": "<legend>"
        },
        {
          "id": "i18",
          "text": "</legend>"
        },
        {
          "id": "i19",
          "text": "</form>"
        },
        {
          "id": "i20",
          "text": "<fieldset>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i19",
          "optionIds": [
            "i17",
            "i18",
            "i19",
            "i20"
          ]
        }
      ],
      "code": "[1]\n  [2]\n    [3]\n    <input type=\"email\" name=\"email\" required>\n    <button type=\"submit\">Subscribe</button>\n  [4]\n[5]"
    },
    {
      "id": "web-295",
      "chapter": "javascript",
      "type": "multiple",
      "question": "You are developing a responsive news portal that must adapt its layout for smartphones,\ntablets, and desktops.\nYou decide to use CSS media queries to handle the styling transitions.\n\nWhich two statements accurately describe the role of media queries? (Select 2)",
      "explanation": "Media queries are a core responsive-design mechanism and conditionally apply CSS rules based on media features such as viewport dimensions or user/device characteristics. They are not instructions to execute JavaScript functions, though JavaScript can separately inspect query matches with matchMedia. They do not automatically minify assets or improve web-server performance; those are separate build and server concerns. The responsive layout still depends on the rules written inside each query rather than merely declaring breakpoints.",
      "options": [
        "Media queries are a core component for implementing responsive web design.",
        "Media queries allow you to apply specific CSS rules based on screen dimensions or device characteristics.",
        "Media queries are used to detect and execute JavaScript functions based on the user's hardware.",
        "Media queries automatically optimize the performance of the web server by minifying assets."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "web-296",
      "chapter": "javascript",
      "type": "multiple",
      "question": "You are developing a multi-step booking system for a travel website.\nYou need to store data that remains available as the user moves between the flight\nselection and the payment page, but this data should be cleared automatically once the\nbrowser tab is closed.\n\nWhich two features should be implemented using sessionStorage? (Select 2)",
      "explanation": "Selected flight details and a transaction identifier can be kept in sessionStorage across same-origin checkout pages within one tab session. The data normally disappears when that page session ends, matching the temporary workflow. A currency preference for future visits or a permanent frequent-flyer record requires longer-lived storage, commonly a server account or appropriate persistent client storage. sessionStorage is readable by page JavaScript, so a transaction identifier here should not be treated as a protected authentication secret. Browser tab restoration and user clearing can affect practical retention.",
      "options": [
        "Temporarily holding selected flight details between checkout steps.",
        "Storing a unique session identifier for the current transaction.",
        "Saving the user's preferred currency for all future visits.",
        "Maintaining a permanent record of the user's frequent flyer number."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "web-297",
      "chapter": "css-layout",
      "type": "single",
      "question": "You are designing a blog layout. You have an image element that is floating to the right\nof the text.\nYou need to ensure that the \"Read More\" section starts on a new line below the image and\nis not allowed to wrap around it.\n\nWhich CSS property should you apply to the \"Read More\" section to achieve this?",
      "explanation": "clear is the relevant property; clear:right avoids a preceding right float and clear:both avoids floats on either side. Applied to the appropriate block-level Read More section, it requests clearance below the floating image rather than wrapping alongside it. float would create another float, overflow controls clipping/scrolling and can affect formatting contexts but is not the direct clearance property, and z-index affects stacking order rather than vertical avoidance of floats. The exact value depends on which float sides should be cleared.",
      "options": [
        "clear",
        "float",
        "overflow",
        "z-index"
      ],
      "correct": 0
    },
    {
      "id": "web-298",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are developing a search feature for a shopping application.\nYou need to provide a list of suggested categories as the user types into the search\nbox.",
      "explanation": "Choose <datalist, categories, and </datalist>. The opening fragment plus id=\"categories\"> creates the suggestion container, whose id matches the input’s list=\"categories\". Its option values supply Electronics and Clothing suggestions while still permitting other input. select creates a restricted option control, option is one entry, and optgroup is not the datalist source. fieldset/legend group and caption form controls rather than supplying suggestions. The opening-fragment choice deliberately lacks > because the template supplies the rest.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<option"
        },
        {
          "id": "i2",
          "text": "<datalist"
        },
        {
          "id": "i3",
          "text": "<select"
        },
        {
          "id": "i4",
          "text": "<optgroup"
        },
        {
          "id": "i5",
          "text": "</datalist>"
        },
        {
          "id": "i6",
          "text": "<datalist"
        },
        {
          "id": "i7",
          "text": "categories"
        },
        {
          "id": "i8",
          "text": "<fieldset>"
        },
        {
          "id": "i9",
          "text": "<legend>"
        },
        {
          "id": "i10",
          "text": "</legend>"
        },
        {
          "id": "i11",
          "text": "</datalist>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i8",
            "i9",
            "i10",
            "i11"
          ]
        }
      ],
      "code": "<input list=\"categories\" id=\"category-search\">\n[1] id=\"[2]\">\n  <option value=\"Electronics\">\n  <option value=\"Clothing\">\n[3]"
    },
    {
      "id": "web-299",
      "chapter": "graphics",
      "type": "single",
      "question": "Which code segment correctly displays images with 60% transparency and a green 12px\nshadow?",
      "explanation": "60% transparency means 40% opacity, so opacity(40%) is the required first filter. drop-shadow(12px 12px green) adds a green shadow offset 12px horizontally and vertically; omitting the blur length leaves zero blur. box-shadow is not a filter function, so both chains using it are invalid. saturate changes saturation, not transparency. Filters compose left to right, so the shadow is computed from the already opacity-filtered image; the snippet does not promise an independently fully opaque shadow.",
      "options": [
        "img { filter: opacity(40%) box-shadow(12px 12px green); }",
        "img { filter: saturate(40%) drop-shadow(12px 12px green); }",
        "img { filter: opacity(40%) drop-shadow(12px 12px green); }",
        "img { filter: saturate(60%) box-shadow(12px 12px green); }"
      ],
      "correct": 2
    },
    {
      "id": "web-300",
      "chapter": "css-layout",
      "type": "single",
      "question": "You need to ensure an element remains in the normal document flow, appearing exactly\nafter the preceding element without any custom offsets. Which CSS position value should\nbe applied?",
      "explanation": "static is the default positioning scheme: the element remains in normal flow and positional offsets such as top and left do not shift it. relative also retains flow space, but permits offsets from its normal position, making it a less precise match to the requested unoffset default behavior. absolute and fixed remove the box from normal flow. Static positioning does not mean no margins or layout gaps; those still follow the applicable formatting rules.",
      "options": [
        "relative",
        "static",
        "absolute",
        "fixed"
      ],
      "correct": 1
    },
    {
      "id": "web-301",
      "chapter": "graphics",
      "type": "single",
      "question": "A messaging app uses horizontal-tb writing mode and a flex container. Its message elements are in oldest-to-newest DOM order, and each new message is appended at the end. Which flex-direction value makes the newest message appear at the top of a vertical stack without setting order?",
      "explanation": "column-reverse places the appended, last-in-DOM message at the top of the vertical stack under the stated horizontal-tb writing mode. column would preserve the oldest-first vertical order. row and row-reverse create horizontal main-axis arrangements rather than the requested vertical stack. The specified append behavior matters: a DOM already ordered newest-first would not need this reversal. CSS visual order does not rewrite the DOM or automatically reverse screen-reader reading order, so applications should consider accessibility when using this visual technique.",
      "options": [
        "row-reverse",
        "column-reverse",
        "column",
        "row"
      ],
      "correct": 1
    },
    {
      "id": "web-302",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete CSS that applies full grayscale, then 40% brightness, then an 8px blur to images. Write every filter amount explicitly; do not rely on omitted-argument defaults. These effects are not access control or encryption.",
      "explanation": "Choose img, filter, grayscale(100%), brightness(40%), and blur(8px). The functions run from left to right: remove saturation, reduce brightness, and soften detail. grayscale() also defaults to full grayscale, but is excluded by the explicit-amount requirement. brightness() and blur() default to different effects than the requested 40% brightness and 8px blur. Quoted amounts and square-bracket calls do not have valid filter-function syntax. transform, transition, and animation are not substitutes for the filter property. The selector img targets images; these appearance changes do not encrypt the resource or prevent access to it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "blur(8px)"
        },
        {
          "id": "i2",
          "text": "img"
        },
        {
          "id": "i3",
          "text": "filter"
        },
        {
          "id": "i4",
          "text": "grayscale(100%)"
        },
        {
          "id": "i5",
          "text": "brightness(40%)"
        },
        {
          "id": "i6",
          "text": "transform"
        },
        {
          "id": "i7",
          "text": "transition"
        },
        {
          "id": "i8",
          "text": "animation"
        },
        {
          "id": "i9",
          "text": "filter"
        },
        {
          "id": "i10",
          "text": "grayscale()"
        },
        {
          "id": "i11",
          "text": "grayscale(\"100%\")"
        },
        {
          "id": "i12",
          "text": "grayscale(100%)"
        },
        {
          "id": "i13",
          "text": "grayscale[100%]"
        },
        {
          "id": "i14",
          "text": "brightness(\"40%\")"
        },
        {
          "id": "i15",
          "text": "brightness(40%)"
        },
        {
          "id": "i16",
          "text": "brightness[40%]"
        },
        {
          "id": "i17",
          "text": "brightness()"
        },
        {
          "id": "i18",
          "text": "blur(8px)"
        },
        {
          "id": "i19",
          "text": "blur[8px]"
        },
        {
          "id": "i20",
          "text": "blur()"
        },
        {
          "id": "i21",
          "text": "blur(\"8px\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4",
            "i5"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i9",
          "optionIds": [
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i15",
          "optionIds": [
            "i14",
            "i15",
            "i16",
            "i17"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i18",
          "optionIds": [
            "i18",
            "i19",
            "i20",
            "i21"
          ]
        }
      ],
      "code": "[1] { [2]: [3] [4] [5]; }"
    },
    {
      "id": "web-303",
      "chapter": "html-forms",
      "type": "single",
      "question": "You are creating a form that asks a user to enter an employee ID. The form must be\nsubmitted only if the field is not empty and matches the following format:\nAA-111-BBBB\n\nWhich markup should you use to create the input element?",
      "explanation": "The first input combines required with [A-Z]{2}-[0-9]{3}-[A-Z]{4}, enforcing two uppercase letters, a hyphen, three digits, a hyphen, and four uppercase letters. maxlength=\"11\" alone restricts length but not character classes or separators. The pattern-only alternative permits empty input because required is absent. [A]{2}-[1]{3}-[B]{4} accepts only the literal AA-111-BBBB, not the general identifier format illustrated by it. Native validation can be bypassed, so the server must enforce the same rule.",
      "options": [
        "<input type=\"text\" name=\"id\" pattern=\"[A-Z]{2}-[0-9]{3}-[A-Z]{4}\" required>",
        "<input type=\"text\" name=\"id\" maxlength=\"11\" required>",
        "<input type=\"text\" name=\"id\" pattern=\"[A-Z]{2}-[0-9]{3}-[A-Z]{4}\">",
        "<input type=\"text\" name=\"id\" pattern=\"[A]{2}-[1]{3}-[B]{4}\" required>"
      ],
      "correct": 0
    },
    {
      "id": "web-304",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You are writing a script to fetch weather data from a local JSON file. Complete the\nasynchronous request code by selecting the correct snippets for each gap.\n\n<script>\n\n[1]\n\nxhr.onload = function() {\n\n[2]\n\nvar display = '';\nfor (var i = 0; i < \n[3]\n; i++) {\ndisplay += '<p>' + responseObject.weather[i].Status + '</p>';\n}\ndocument.getElementById('weather-box').innerHTML = display;\n};\nxhr.open('GET', 'data.json', true);\nxhr.send(null);\n</script>",
      "explanation": "First construct xhr with new XMLHttpRequest so the handler and request methods have an object to use. Inside onload, parse xhr.responseText with JSON.parse into responseObject. The loop bound is responseObject.weather.length, visiting indices zero through length minus one and appending each Status in a paragraph. Constructing a request in place of parsing would not expose weather, and a bare length expression cannot replace a variable declaration. The snippet assumes successful HTTP status and valid weather-array JSON; production code should check failures and avoid inserting untrusted Status strings as unsanitized HTML.",
      "dragItems": [
        {
          "id": "i1",
          "text": "responseObject.weather.length"
        },
        {
          "id": "i2",
          "text": "var xhr = new XMLHttpRequest();"
        },
        {
          "id": "i3",
          "text": "var responseObject = JSON.parse(xhr.responseText);"
        },
        {
          "id": "i4",
          "text": "var xhr = new XMLHttpRequest();"
        },
        {
          "id": "i5",
          "text": "var responseObject = JSON.parse(xhr.responseText);"
        },
        {
          "id": "i6",
          "text": "responseObject.weather.length"
        },
        {
          "id": "i7",
          "text": "var responseObject = JSON.parse(xhr.responseText);"
        },
        {
          "id": "i8",
          "text": "responseObject.weather.length"
        },
        {
          "id": "i9",
          "text": "var xhr = new XMLHttpRequest();"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ]
    }
  ]
};
