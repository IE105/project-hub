# IE105 · Project Hub

> **Course:** IE105 - Nhập môn Bảo đảm và An ninh Thông tin  
> **Topic:** Backdoor Attack trong mô hình học máy
> **Current Status:** 01. Problem Definition

Repository này là **Project Hub** của nhóm trong đồ án IE105, dùng để quản lý tài liệu, nghiên cứu, thí nghiệm và theo dõi tiến độ của đề tài.

##  Project Overview

Đề tài tập trung tìm hiểu **Backdoor Attack** trong Machine Learning / Deep Learning, trước mắt trên bài toán **phân loại hình ảnh**.

Mục tiêu là hiểu:

- Backdoor Attack hoạt động như thế nào.
- Trigger và dữ liệu poison ảnh hưởng đến mô hình ra sao.
- Mức độ thành công của tấn công.
- Ảnh hưởng đến độ chính xác trên dữ liệu sạch.
- Một số phương pháp phát hiện hoặc phòng thủ Backdoor.

## Scope

**Initial Baseline:**

- Image Classification
- Deep Learning
- Backdoor / Data Poisoning Attack
- Một số phương pháp Defense
- Đánh giá và so sánh kết quả thực nghiệm

## Repo Structure

```text
project-hub/
├── README.md
├── package.json
├── docs/
│   ├── .vitepress/  # Cấu hình và giao diện
│   ├── index.md     # Trang chủ
│   ├── project/
│   ├── discovery/
│   ├── product/
│   └── development/
└── .github/workflows/deploy-docs.yml
```

## Chạy tài liệu trên máy

Yêu cầu Node.js 22 trở lên. Chạy `npm ci`, sau đó `npm run docs:dev` để xem trên máy hoặc `npm run docs:build` để kiểm tra bản build. `npm run docs:preview` cho phép xem bản đã build.

Để đăng lên GitHub Pages, chọn **GitHub Actions** ở **Settings → Pages** rồi đưa thay đổi lên nhánh `main`. Workflow sẽ tự build và deploy site.

## Project Stages

```mermaid
flowchart LR
    A["01. Problem Definition"]
    B["02. Literature & Scope"]
    C["03. Experimental Design"]
    D["04. Iterative Experimentation"]
    E["05. Evaluation & Findings"]
    F["06. Report & Demo"]

    A --> B --> C --> D --> E --> F

    E -. "Need more evidence" .-> D
    E -. "Revise design" .-> C
```

## Documentation

Các quyết định, phạm vi nghiên cứu, thiết kế thí nghiệm và kết quả quan trọng sẽ được lưu trong repository để làm **nguồn tham chiếu chính thức của dự án**.

