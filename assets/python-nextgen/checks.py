# Prep. local practice checker. These tests are shipped to the browser, not secret exam keys.
import ast, builtins, contextlib, io, json, math, os, random, traceback, types, unittest
_REAL_OPEN = builtins.open
class LimitedOutput(io.StringIO):
    def write(self, s):
        left = 8000 - self.tell()
        if left > 0: super().write(str(s)[:left])
        return len(s)
def evaluate(code, lab_id, action):
    if lab_id in {f"png-l{i:03}" for i in range(9,22)}:return evaluate_script(code,lab_id,action)
    output = LimitedOutput(); cases = []; opened = []; events = []
    def record(name, passed, detail=''):
        cases.append({'name':name,'passed':bool(passed),'detail':detail[:500]})
    def local_open(file, mode='r', *args, **kwargs):
        if str(file) not in ('temp.txt','./temp.txt') or mode not in ('r','w','a','r+','w+','a+'):
            raise PermissionError('Only virtual temp.txt is available in this lab.')
        if 'r' in mode: events.append(('read', all(h.closed for h in opened)))
        h = _REAL_OPEN('temp.txt', mode, *args, **kwargs); opened.append(h)
        events.append((mode, True)); return h
    random_api = types.SimpleNamespace(randint=random.randint)
    modules = {'random':random_api,'math':math,'unittest':types.SimpleNamespace(TestCase=unittest.TestCase)}
    def allowed_import(name, globals=None, locals=None, fromlist=(), level=0):
        if level or name not in modules: raise ImportError('Available modules: random, math, unittest.')
        return modules[name]
    names = 'abs all any bool dict enumerate filter float int isinstance issubclass len list map max min next object pow print range reversed round set sorted str sum super tuple type zip Exception ValueError TypeError ZeroDivisionError AssertionError StopIteration RuntimeError FileNotFoundError'.split()
    safe = {n:getattr(builtins,n) for n in names}
    safe.update({'__build_class__':builtins.__build_class__, '__import__':allowed_import, 'open':local_open})
    env = {'__builtins__':safe,'__name__':'__student__'}
    try:
        if len(code)>30000: raise ValueError('Code exceeds the 30,000-character limit.')
        tree=ast.parse(code,filename='solution.py')
        for n in ast.walk(tree):
            if isinstance(n,ast.Attribute) and n.attr.startswith('__'): raise ValueError('Dunder introspection is not available in these practice labs.')
            if isinstance(n,ast.Name) and n.id.startswith('__') and n.id!='__name__': raise ValueError('Private runtime names are unavailable.')
            if isinstance(n,(ast.Import,ast.ImportFrom)):
                names_=[a.name.split('.')[0] for a in n.names] if isinstance(n,ast.Import) else [n.module]
                if any(x not in modules for x in names_): raise ImportError('Available modules: random, math, unittest.')
        with contextlib.redirect_stdout(output), contextlib.redirect_stderr(output): exec(compile(tree,'solution.py','exec'),env,env)
        if action=='run': return {'stdout':output.getvalue() or 'Code executed. Add print calls to inspect your function results.','cases':[],'ratio':None}
        def fn(name):
            f=env.get(name)
            if not callable(f): raise ValueError('Define '+name+' with the required name.')
            return f
        def check(name, f, args, expected, kind=None):
            try:
                got=f(*args); record(name, got==expected and (kind is None or type(got) is kind), 'Expected '+repr(expected)+'; received '+repr(got))
            except Exception as e:record(name,False,type(e).__name__+': '+str(e))
        with contextlib.redirect_stdout(output), contextlib.redirect_stderr(output):
            if lab_id=='png-l001':
                f=fn('filter_even')
                for i,values in enumerate([[],[1,2,3,4],[0,-2,-3,2,2],[1,3,5],[8,6,4]]):
                    old=values[:];check('Even filtering '+str(i+1),f,(values,),[v for v in old if v%2==0],list)
                    if values!=old:record('Input must remain unchanged',False)
            elif lab_id=='png-l002':
                f=fn('is_valid_password')
                for v in ['A1234567','A123456','12345678','B1234567','abcdefghA','a1234567','', 'AAAAAAAA']:
                    check('Password '+repr(v),f,(v,),len(v)>=8 and 'A' in v,bool)
            elif lab_id=='png-l003':
                f=fn('safe_divide');definition=next((n for n in tree.body if isinstance(n,ast.FunctionDef) and n.name=='safe_divide'),None)
                if not definition or not any(isinstance(n,ast.Try) and n.handlers for n in ast.walk(definition)):
                    raise ValueError('The task requires try/except inside safe_divide.')
                for a,b in [(6,3),(0,4),(5,0),(-5,2),(0,0),(3,-2)]:check('Divide '+repr((a,b)),f,(a,b),a/b if b else 'Error')
            elif lab_id=='png-l004':
                f=fn('roll_until_six')
                aliases=[key for key,value in env.items() if value is random.randint]
                for seq in [[6],[1,6],[2,3,4,6],[1]*40+[6]]:
                    calls=[0]
                    def draw(a,b):
                        if (a,b)!=(1,6):raise AssertionError('Use inclusive bounds 1 and 6.')
                        if calls[0]>=len(seq):raise AssertionError('Stop at the first six.')
                        value=seq[calls[0]];calls[0]+=1;return value
                    random_api.randint=draw
                    for key in aliases: env[key]=draw
                    check('Sequence of '+str(len(seq))+' rolls',f,(),len(seq),int)
                    record('All required draws counted',calls[0]==len(seq))
            elif lab_id=='png-l005':
                f=fn('calculate_total')
                for values in [[],[1,2,3],[0,8],[-2,3,-1,4],[3,0,100],[-3,0,7],[1.5,2.5,0,4]]:
                    total=0
                    for v in values:
                        if v==0:break
                        if v>0:total+=v
                    check('Prices '+repr(values),f,(values[:],),total)
            elif lab_id=='png-l006':
                f=fn('reverse_tail')
                for text in ['Python','abc','hello world','123456','șirabc','a b']:
                    check('Tail '+repr(text),f,(text,),text[-3:][::-1],str)
            elif lab_id=='png-l007':
                cls=env.get('MyTest');add=fn('add')
                if not isinstance(cls,type) or not issubclass(cls,unittest.TestCase):raise ValueError('MyTest must inherit unittest.TestCase.')
                method=next((n for n in ast.walk(tree) if isinstance(n,ast.FunctionDef) and n.name=='test_addition'),None)
                if not method or not any(isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and n.func.attr=='assertEqual' for n in ast.walk(method)):
                    raise ValueError('Use self.assertEqual in test_addition.')
                record('Keep the supplied add function',add(2,3)==5 and add(-1,4)==3)
                for value,expected in [(5,True),(999,False)]:
                    env['add']=lambda a,b,v=value:v
                    result=unittest.TestResult();cls('test_addition').run(result)
                    record('Test '+('passes for 5' if expected else 'rejects an incorrect result'), result.wasSuccessful()==expected)
                env['add']=add
            elif lab_id=='png-l008':
                f=fn('write_and_read')
                for old in [None,'old content that must be overwritten']:
                    for h in opened:
                        if not h.closed:h.close()
                    opened.clear();events.clear()
                    if os.path.exists('temp.txt'):os.remove('temp.txt')
                    if old is not None:
                        with _REAL_OPEN('temp.txt','w') as h:h.write(old)
                    check('Read back the written file',f,(),'Hello',str)
                    record('Write and then reopen for reading',any(e[0]=='w' for e in events) and any(e[0]=='read' for e in events))
                    record('Close writer before read',all(e[1] for e in events if e[0]=='read'))
                    try:
                        with _REAL_OPEN('temp.txt') as h:record('Actual file content',h.read()=='Hello')
                    except Exception:record('Actual file content',False)
            else:raise ValueError('Unknown lab.')
        passed=sum(c['passed'] for c in cases)
        return {'stdout':output.getvalue(),'cases':cases,'passed':passed,'total':len(cases),'ratio':passed/len(cases) if cases else 0}
    except Exception as e:
        record('Code / task requirements',False,type(e).__name__+': '+str(e))
        return {'stdout':output.getvalue(),'cases':cases,'passed':0,'total':max(1,len(cases)),'ratio':0,'error':traceback.format_exc(limit=3)[-2500:]}
    finally:
        for h in opened:
            try:h.close()
            except Exception:pass

# Isolated script-lab evaluator. All imports/filesystem objects exposed to the student are facades.
def evaluate_script(code, lab_id, action):
    import copy
    cases=[]; display=''
    def record(name, passed, detail=''):
        cases.append({'name':name,'passed':bool(passed),'detail':str(detail)[:500]})
    initial={
        'png-l009':{'zip_code':84095}, 'png-l010':{'sales_amount':31000},
        'png-l011':{'locations':['Bali','Auckland','Sydney','Bangkok','Tokyo'],'location':0},
        'png-l013':{'chickens':50}, 'png-l014':{'x':5,'y':0},
        'png-l015':{'population':[34000,24000,38000,48000,45000]},
        'png-l017':{'x':33.4,'y':25.7},
        'png-l020':{'baskets':['Wicker','Picnic','Gift','Market']},
        'png-l021':{'price':30000,'licensing':1000,'rate':.05}}
    variants={
        'png-l009':[{'zip_code':10001},{'zip_code':0}],
        'png-l010':[{'sales_amount':30000},{'sales_amount':0},{'sales_amount':30001}],
        'png-l011':[{'locations':[]},{'locations':['Cahul']},{'locations':['A','B','C']}],
        'png-l012':[{'file_text':'Bears\nLions\n'},{'file_text':''}],
        'png-l013':[{'chickens':7},{'chickens':123},{'chickens':12345}],
        'png-l014':[{'x':6,'y':3},{'x':0,'y':4},{'x':-5,'y':2}],
        'png-l015':[{'population':[7]},{'population':[8,-2,9]}],
        'png-l017':[{'x':-2.3,'y':4.0},{'x':0,'y':1.01}],
        'png-l020':[{'choice_index':i} for i in range(4)],
        'png-l021':[{'price':100,'licensing':5,'rate':0},{'price':20000,'licensing':500,'rate':.05}]}
    try:
        if len(code)>30000:raise ValueError('Code exceeds the 30,000-character limit.')
        tree=ast.parse(code,filename='solution.py')
        for n in ast.walk(tree):
            if isinstance(n,ast.Attribute) and n.attr.startswith('__'):raise ValueError('Dunder introspection is unavailable.')
            if isinstance(n,ast.Name) and n.id.startswith('__') and n.id!='__name__':raise ValueError('Private runtime names are unavailable.')
            if isinstance(n,(ast.Import,ast.ImportFrom)):
                mods=[a.name for a in n.names] if isinstance(n,ast.Import) else [n.module]
                if getattr(n,'level',0) or any(m not in ('math','random','os') for m in mods):raise ImportError('Available modules: math, random, restricted os.')
        # Retain the initial assignments. Tests substitute their values in a copied AST, never the solution text.
        assignments={}
        for key,value in initial.get(lab_id,{}).items():
            n=next((n for n in tree.body if isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id==key for t in n.targets)),None)
            if n is None or ast.literal_eval(n.value)!=value:raise ValueError('Keep the supplied initial assignment for '+key+'.')
            assignments[key]=n.lineno
        if lab_id=='png-l014' and not any(isinstance(n,ast.Try) and n.handlers and n.finalbody for n in ast.walk(tree)):
            raise ValueError('Use a try/except/finally structure as requested.')
        def execute(fixture):
            out=LimitedOutput();opened=[];events=[];dirs=set();choices=[]
            def local_open(file,mode='r',*args,**kwargs):
                if lab_id!='png-l012' or str(file) not in ('list.txt','./list.txt') or mode not in ('r','rt'):
                    raise PermissionError('Only virtual list.txt in read-only mode is available for this task.')
                events.append((str(file),mode));h=io.StringIO(fixture.get('file_text','Python\nPractice\n'));opened.append(h);return h
            def mkdir(name,*args,**kwargs):
                if str(name)!='Sample Files':raise PermissionError('Only the virtual Sample Files directory is available.')
                if name in dirs:raise FileExistsError(name)
                dirs.add(name)
            def choice(values):
                choices.append(list(values))
                if not values:raise IndexError('Cannot choose from an empty sequence.')
                return random.choice(values) if action=='run' else values[fixture.get('choice_index',0)%len(values)]
            modules={'math':math,'random':types.SimpleNamespace(choice=choice),'os':types.SimpleNamespace(mkdir=mkdir)}
            def importer(name,globals=None,locals=None,fromlist=(),level=0):
                if level or name not in modules:raise ImportError('Module not available in this practice workspace.')
                return modules[name]
            names='abs all any bool dict enumerate filter float int isinstance len list map max min next object pow print range reversed round set sorted str sum tuple type zip Exception ValueError TypeError ZeroDivisionError AssertionError RuntimeError FileNotFoundError'.split()
            safe={n:getattr(builtins,n) for n in names};safe.update({'__import__':importer,'open':local_open})
            env={'__builtins__':safe,'__name__':'__student__'};edited=copy.deepcopy(tree)
            for n in edited.body:
                if isinstance(n,ast.Assign):
                    for key,lineno in assignments.items():
                        if n.lineno==lineno and key in fixture:n.value=ast.parse(repr(fixture[key]),mode='eval').body
            ast.fix_missing_locations(edited)
            try:
                with contextlib.redirect_stdout(out),contextlib.redirect_stderr(out):exec(compile(edited,'solution.py','exec'),env,env)
                text=out.getvalue();data={**initial.get(lab_id,{}),**fixture}
                ok=False;detail=''
                if lab_id=='png-l009':ok=type(env.get('zip_code')) is str and env['zip_code']==str(data['zip_code']) and text=="<class 'str'>\n"
                elif lab_id=='png-l010':
                    expected='5% bonus' if data['sales_amount']>30000 else 'no bonus';ok=env.get('bonus_amount')==expected and text==expected+'\n'
                elif lab_id=='png-l011':ok=text==''.join(str(x)+'\n' for x in data['locations'])
                elif lab_id=='png-l012':ok=text==data.get('file_text','Python\nPractice\n')+'\n' and env.get('content') in opened and bool(events) and all(h.closed for h in opened)
                elif lab_id=='png-l013':ok=env.get('txt')=='We have {:<4} chickens.' and text==f"We have {data['chickens']:<4} chickens.\n"
                elif lab_id=='png-l014':
                    expected=(str(data['x']/data['y']) if data['y'] else 'You may have tried to divide by zero')+'\nThank you for playing\n';ok=text==expected
                elif lab_id=='png-l015':ok=env.get('high_population')==max(data['population']) and env.get('low_population')==min(data['population']) and text==f"{max(data['population'])}\n{min(data['population'])}\n"
                elif lab_id=='png-l016':ok=(ast.get_docstring(tree) or '').strip()=='IT Specialist - Python' and text==''
                elif lab_id=='png-l017':
                    f=env.get('number_up');ok=callable(f) and text==f"{math.ceil(data['x'])}\n{math.ceil(data['y'])}\n" and all(type(f(v)) is int and f(v)==math.ceil(v) for v in [-8.2,0,4,1.01,100.2])
                elif lab_id=='png-l018':
                    f=env.get('sales_tax');definition=next((n for n in tree.body if isinstance(n,ast.FunctionDef) and n.name=='sales_tax'),None)
                    ok=callable(f) and definition is not None and [a.arg for a in definition.args.args]==['amount','tax'] and len(definition.args.defaults)==1 and ast.literal_eval(definition.args.defaults[0])==.08 and text=='8.0\n' and all(math.isclose(f(a,t),a*t) for a,t in [(0,.08),(125,.2),(-100,.1)]) and math.isclose(f(50),4)
                elif lab_id=='png-l019':ok=dirs=={'Sample Files'}
                elif lab_id=='png-l020':ok=bool(choices) and all(v==data['baskets'] for v in choices) and text==data['baskets'][fixture.get('choice_index',0)]+'\n'
                elif lab_id=='png-l021':
                    expected=(data['price']+data['licensing'])*(1+data['rate'])
                    try:ok=len(text.strip().splitlines())==1 and math.isclose(float(text.strip()),expected)
                    except ValueError:ok=False
                return ok,text,'Check variables, output, file state and task requirements.'
            finally:
                for h in opened:h.close()
        fixtures=[{}] if action=='run' else [{}]+variants.get(lab_id,[])
        for i,fixture in enumerate(fixtures):
            try:
                ok,text,detail=execute(fixture)
                if i==0:display=text
                if action!='run':record('Initial task' if i==0 else 'Additional case '+str(i),ok,detail if not ok else 'Passed with this input.')
            except Exception as e:
                if action=='run':raise
                record('Initial task' if i==0 else 'Additional case '+str(i),False,type(e).__name__+': '+str(e))
        if action=='run':return {'stdout':display or 'Code executed without console output.','cases':[],'ratio':None}
        passed=sum(c['passed'] for c in cases)
        return {'stdout':display,'cases':cases,'passed':passed,'total':len(cases),'ratio':passed/len(cases) if cases else 0}
    except Exception as e:
        record('Code / task requirements',False,type(e).__name__+': '+str(e))
        return {'stdout':display,'cases':cases,'passed':0,'total':len(cases),'ratio':0,'error':str(e)}
