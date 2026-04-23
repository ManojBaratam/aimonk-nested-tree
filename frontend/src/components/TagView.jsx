import { useState } from "react";

export default function TagView({ node, onChange }) {
  const [collapsed, setCollapsed] = useState(false);

  // Handle data change
  const handleDataChange = (e) => {
    node.data = e.target.value;
    onChange();
  };

  // Add child logic
  const addChild = () => {
    if (node.data) {
      delete node.data;
      node.children = [{ name: "New Child", data: "Data" }];
    } else {
      if (!node.children) node.children = [];
      node.children.push({ name: "New Child", data: "Data" });
    }
    onChange();
  };

  return (
    <div
      style={{
        marginLeft: "20px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "6px",
        marginTop: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "5px",
        }}
      >
        {/* Collapse button */}
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? ">" : "v"}
        </button>

        {/* Editable Name */}
        <input
          value={node.name}
          onChange={(e) => {
            node.name = e.target.value;
            onChange();
          }}
          style={{
            fontWeight: "bold",
            border: "none",
            background: "transparent",
            outline: "none",
            minWidth: "120px",
          }}
        />

        {/* Add Child */}
        <button onClick={addChild}>+ Add Child</button>
      </div>

      {/* Content */}
      {!collapsed && (
        <div style={{ marginTop: "8px" }}>
          {/* Data input */}
          {node.data && (
            <input
              value={node.data}
              onChange={handleDataChange}
              style={{
                padding: "6px",
                width: "220px",
                marginTop: "6px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          )}

          {/* Recursive children */}
          {node.children &&
            node.children.map((child, index) => (
              <TagView
                key={index}
                node={child}
                onChange={onChange}
              />
            ))}
        </div>
      )}
    </div>
  );
}