import React from "react";

export default ({ tableList, goodsName }) => {
  let tableContent = [];
  if (tableList && tableList.length > 0) {
    tableContent = tableList.map((item, index) =>
      <tr key={`tr-${index}`}>
        <td>
          {item.name}
        </td>
        <td>
          {item.item}
        </td>
        <td>
          {item.value}
        </td>
      </tr>
    );
    tableContent.unshift(
      <tr key="head">
        <th>名称</th>
        <th>Name</th>
        <th>
          {goodsName}
        </th>
      </tr>
    );
    return (
      <table className="productDetIntTable">
        {tableContent}
      </table>
    );
  } else {
    return <div>暂无数据</div>;
  }
};
