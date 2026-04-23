import { useEffect, useState } from "react";
import TagView from "./components/TagView";
import { getTrees, createTree, updateTree } from "./api";

export default function App() {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    loadTrees();
  }, []);

  const loadTrees = async () => {
    const res = await getTrees();
    setTrees(res.data);
  };

  // Save / Update tree
  const handleSave = async (tree) => {
    console.log("Saved JSON:");
    console.log(JSON.stringify(tree.tree_data, null, 2));

    if (tree.id) {
      await updateTree(tree.id, tree.tree_data); // UPDATE
    } else {
      await createTree(tree.tree_data); // CREATE (rare case)
    }

    loadTrees();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nested Tag Tree</h1>

      {trees.map((tree) => (
        <div
          key={tree.id}
          style={{
            marginBottom: "30px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fafafa",
          }}
        >
          <h3>🌳 Tree ID: {tree.id}</h3>

          <TagView
            node={tree.tree_data}
            onChange={() => setTrees([...trees])}
          />

          <button onClick={() => handleSave(tree)}>
            💾 Save Tree
          </button>
        </div>
      ))}
    </div>
  );
}