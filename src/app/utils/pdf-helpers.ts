import React from 'react';

export const stripJSX = (node: any): string => {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(stripJSX).join("");
  if (node.props && node.props.children) return stripJSX(node.props.children);
  return "";
};

export const sanitizeForPDF = (items: any[]) => {
  return items.map(item => ({
    title: item.title,
    date: item.date,
    skills: item.skills || "",
    bullets: item.bullets.map((b: any) => stripJSX(b))
  }));
};