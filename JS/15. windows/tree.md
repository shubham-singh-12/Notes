window (global object)
├── document  → your HTML page (DOM)
├── location  → URL info (BOM)
├── history   → browser history (BOM)
├── alert()   → browser dialog (BOM)
└── ... many more



<!-- The DOM tree structure -->
document
└── html
    ├── head
    │   ├── meta
    │   └── title
    │       └── "JavaScript DOM"    ← text node (leaf node)
    └── body
        └── div.container
            └── div.box
                └── "This is a box" ← text node (leaf node)