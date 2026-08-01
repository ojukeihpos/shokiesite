export const stripJSX = (node: any): string => {
  if (!node) return "";
  
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  
  if (Array.isArray(node)) {
    return node.map(stripJSX).join("");
  }
  
  if (typeof node === "object") {
    if (node.props && 'children' in node.props) {
      return stripJSX(node.props.children);
    }
  }
  
  return "";
};

export const sanitizeForPDF = (items: any[]) => {
  return items.map(item => ({
    title: item.title ? stripJSX(item.title) : "",
    date: item.date ? stripJSX(item.date) : "",
    location: item.location ? stripJSX(item.location) : "",
    subTitle: item.subTitle ? stripJSX(item.subTitle) : "",
    skills: item.skills || "",
    highlight: item.highlight ? stripJSX(item.highlight) : "",
    bullets: Array.isArray(item.bullets) 
      ? item.bullets.map((b: any) => stripJSX(b)) 
      : []
  }));
};