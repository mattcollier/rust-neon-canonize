const testVectors = {};

testVectors.alpha = [
  [
    {
      "subject": {
        "termType": "NamedNode",
        "value": "http://example.com"
      },
      "predicate": {
        "termType": "NamedNode",
        "value": "http://example.com/label"
      },
      "object": {
        "termType": "Literal",
        "value": "test",
        "datatype": {
          "termType": "NamedNode",
          "value": "http://example.com/t1"
        }
      },
      "graph": {
        "termType": "DefaultGraph",
        "value": ""
      }
    },
    {
      "subject": {
        "termType": "NamedNode",
        "value": "http://example.com"
      },
      "predicate": {
        "termType": "NamedNode",
        "value": "http://example.com/label"
      },
      "object": {
        "termType": "Literal",
        "value": "test",
        "datatype": {
          "termType": "NamedNode",
          "value": "http://example.com/t2"
        }
      },
      "graph": {
        "termType": "DefaultGraph",
        "value": ""
      }
    }
  ],
  {
    "algorithm": "URDNA2015",
    "inputFormat": "application/n-quads",
    "format": "application/n-quads",
    "useNative": true
  }
]

export {testVectors};
