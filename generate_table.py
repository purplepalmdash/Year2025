#!/usr/bin/env python3
"""
批量生成 year{年份}.md 表格的脚本
提取所有 {年份}*.md 文件中的 ### N. Title 标题，生成带相对路径超链接的表格

用法:
  python3 generate_table.py [年份]
  例如:
    python3 generate_table.py 2025  # 生成 2025 年表格
    python3 generate_table.py 2026  # 生成 2026 年表格
    python3 generate_table.py       # 默认生成 2025 年表格
"""
import os
import re
import glob
import sys

def extract_headers(filepath):
    """提取文件中所有 ### N. Title 格式的标题"""
    headers = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            for line in f:
                match = re.match(r'^### (\d+\..+)$', line.strip())
                if match:
                    headers.append(match.group(1))
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return headers

def title_to_anchor(title):
    """将标题转换为 URL anchor，支持中文（模仿 mdBook 规则）"""
    anchor = title.lower()
    # 先处理 'N. ' 模式（数字加点号加空格）-> 'N-'
    anchor = re.sub(r'(\d)\.\s', r'\1-', anchor)
    # 处理 'N.N' 模式（数字加点号加数字）-> 'N-N'
    anchor = re.sub(r'(\d)\.(\d)', r'\1-\2', anchor)
    # 英文/数字与中文之间的空格删除
    anchor = re.sub(r'([a-z0-9])\s+([\u4e00-\u9fff])', r'\1\2', anchor)
    anchor = re.sub(r'([\u4e00-\u9fff])\s+([a-z0-9])', r'\1\2', anchor)
    # 其他空格转连字符
    anchor = re.sub(r'\s+', '-', anchor)
    # 删除其他特殊字符（保留字母数字连字符中文）
    anchor = re.sub(r'[^\w\u4e00-\u9fff-]', '', anchor)
    # 合并多个连字符
    anchor = re.sub(r'-+', '-', anchor)
    anchor = anchor.strip('-')
    return anchor

def generate_link(title, date):
    """生成相对路径的超链接"""
    anchor = title_to_anchor(title)
    url = f"{date}.html#{anchor}"
    return f"[{title}]({url})"

def generate_date_link(date):
    """生成日期列的超链接，指向对应的 HTML 文件"""
    url = f"{date}.html"
    return f"[{date}]({url})"

def main():
    # 从命令行参数获取年份，默认为 2025
    year = sys.argv[1] if len(sys.argv) > 1 else "2025"

    src_dir = os.path.dirname(os.path.abspath(__file__))
    files = sorted(glob.glob(os.path.join(src_dir, "src", f"{year}*.md")), reverse=True)

    if not files:
        print(f"未找到 {year}*.md 文件", file=sys.stderr)
        return

    # 输出头部
    print(f"# Year{year}")
    print(f"用来记录 {year} 年每天所做的事情，主要是技术类。")
    print("")
    print(f"From {year}Feb06")
    print("")

    lines = []
    for filepath in files:
        filename = os.path.basename(filepath)
        date = filename.replace('.md', '')
        headers = extract_headers(filepath)

        if headers:
            linked_headers = [generate_link(h, date) for h in headers]
            conclusion = "<br>".join(linked_headers)
            date_link = generate_date_link(date)
            lines.append(f"| {date_link} | {conclusion} |")

    # 输出表格到 stdout
    print("| Date | Conclusion |")
    print("| ----------- | ----------- |")
    for line in lines:
        print(line)

if __name__ == "__main__":
    main()
