import { h, RectNode, RectNodeModel } from '@logicflow/core';
// 自定义节点视图
class CustomIconTextNode extends RectNode {
  getShape() {
    const { x, y, width, height, properties } = this.props.model;
    const title = properties.title || '节点名称';
    const description = properties.description || '节点描述';

    // SVG 图标的定义
    const svgIcon = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- 表格背景 -->
        <rect x="2" y="2" width="20" height="20" fill="#FFFFFF" stroke="#000000"/>
        <!-- 横线 -->
        <line x1="2" y1="8" x2="22" y2="8" stroke="#000000" stroke-width="1"/>
        <line x1="2" y1="14" x2="22" y2="14" stroke="#000000" stroke-width="1"/>
        <!-- 竖线 -->
        <line x1="8" y1="2" x2="8" y2="22" stroke="#000000" stroke-width="1"/>
        <line x1="14" y1="2" x2="14" y2="22" stroke="#000000" stroke-width="1"/>
      </svg>
    `;

    return h('g', {}, [
      // 绘制长方形
      h('rect', {
        x: x - width / 2,
        y: y - height / 2,
        width,
        height,
        rx: 5,
        ry: 5,
        fill: '#FFFFFF',
        stroke: '#D3D3D3',
      }),
      // 绘制 SVG 图标和标题
      h('foreignObject', {
        x: x - width / 2,
        y: y - height / 2,
        width,
        height: height / 2,
      }, [
        h('div', {
          xmlns: 'http://www.w3.org/1999/xhtml',
          style: `display: flex; align-items: center; width: ${width}px; height: ${height / 2}px;`,
        }, [
          h('div', {
            style: 'margin-left: 4px; margin-right: 8px;', // 图标和标题之间的间距
            innerHTML: svgIcon,
          }),
          h('div', {
            style: 'font-size: 13px; ',
          }, title),
        ]),
      ]),
      // 绘制横线
      h('line', {
        x1: x - width / 2,
        y1: y,
        x2: x + width / 2,
        y2: y,
        stroke: '#D3D3D3',
        'stroke-width': 0.5,
      }),
      // 绘制描述文字
      h('text', {
        x: x + 4,
        y: y + height / 4,
        fill: '#000000',
        'text-anchor': 'end',
        'dominant-baseline': 'middle',
        'font-size': 12,
      }, description)
    ]);
  }
}

// 自定义节点模型
class CustomIconTextNodeModel extends RectNodeModel {
  initNodeData(data) {
    super.initNodeData(data);
    this.width = 100;
    this.height = 50;
  }
}

export { CustomIconTextNode, CustomIconTextNodeModel };
