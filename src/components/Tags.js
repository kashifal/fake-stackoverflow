import React from "react";
import Layout from "../Layout";
import { m } from "./fakestackoverflow";

export default function Tags() {
  const model = m; // Create an instance of the Model class
  const tagsWithCounts = model.getAllTagsWithQuestionCounts();

  return (
    <Layout>
      <div>
        <h2>Tags</h2>
        <ul className="tag_card">
          {tagsWithCounts.map((tag) => (
            <li key={tag.name}>
              <span>{tag.name}</span> <span>({tag.count} questions)</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
