use neon::prelude::*;

enum TermType {
    BLANK_NODE,
    NAMED_NODE,
    LITERAL,
    DEFAULT_GRAPH,
}

struct Term {
    termType: TermType,
    value: String,
}

struct Quad {
    subject: Term,
    predicate: Term,
    object: Term,
    graph: Term,
}

struct Dataset {
    QuadSet: Vec<Quad>,
}

fn hello(mut cx: FunctionContext) -> JsResult<JsNumber> {
    // let arg0 = cx.argument::<JsString>(0)?;
    let js_arr_handle: Handle<JsArray> = cx.argument(0)?;
    let vec: Vec<Handle<JsValue>> = js_arr_handle.to_vec(&mut cx)?;
    let mut x;
    let mut n = 0;
    for (i, item) in vec.iter().enumerate() {
        if i == 0 {
            x = item.downcast::<JsArray, _>(&mut cx).unwrap();
            let js_arr_handle_2: Handle<JsArray> = x;
            let vec2: Vec<Handle<JsValue>> = js_arr_handle_2.to_vec(&mut cx)?;
            n = vec2.len();
        }
    }
    Ok(cx.number(n as f64))
}

register_module!(mut cx, {
    cx.export_function("hello", hello)
});
