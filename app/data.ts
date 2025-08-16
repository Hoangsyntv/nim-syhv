type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Nội thất gia đình',
    description:
      'Các sản phẩm nội thất gia dụng hữu ích được nhiều hộ gia đình ưa chuộng như Tủ sắt đựng quần áo, bàn ăn inox, ghế gấp, ghế thư giãn, ghế xếp nan gỗ, thang gấp, giá phơi quần áo, cây treo quần áo, cầu là, võng xếp, giường gấp, kệ gia dụng đa năng, kệ tivi',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'noithat-giadinh',
  },
  {
    name: 'Nội thất văn phòng',
    description: 'Đa dạng sản phẩm nội thất văn phòng như bàn làm việc, tủ tài liệu, tủ locker, ghế văn phòng, bàn họp, bục phát biểu, bảng flipchart, két sắt văn phòng đáp ứng mọi nhu cầu của doanh nghiệp.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'noithat-vanphong',
  },
  {
    name: 'Nội thất trường học',
    description: 'Bàn ghế học sinh, bàn giáo viên, tủ sách, bảng viết, kệ để đồ, giường tầng, các sản phẩm nội thất chuyên dụng cho trường học, lớp học, phòng chức năng.',
    link: '#',
    image: '/noi_that_truong_hoc.jpg',
    id: 'noithat-truonghoc',
  },
  {
    name: 'Nội thất nhà hàng khách sạn',
    description: 'Thiết kế và sản xuất nội thất cao cấp cho nhà hàng, khách sạn như: bàn ghế nhà hàng, quầy bar, tủ rượu, giường khách sạn, tủ đầu giường, bàn làm việc, tủ quần áo, sofa đón khách. Sản phẩm đạt tiêu chuẩn chất lượng quốc tế.',
    link: '#',
    image: '/noi_that_nha_hang_khach_san.jpg',
    id: 'noithat-nhahang-khachsan',
  },
]

export const FEATURED_PROJECTS = [
  {
    title: 'Bệnh viện 103',
    address: 'Số 261 Đ. Phùng Hưng, Hà Đông, Hà Nội',
    description: 'Cung cấp và lắp đặt nội thất cho toàn bộ khu vực phòng bệnh, phòng làm việc và khu vực công cộng của bệnh viện.',
    image: '/Benh_vien_103.jpg',
    year: '2023'
  },
  {
    title: 'Viettel Crown Plaza',
    address: 'Hà Nội',
    description: 'Thiết kế và thi công nội thất văn phòng cao cấp cho tòa nhà Viettel Crown Plaza.',
    image: '/Viettel Plaza.jpg',
    year: '2023'
  },
  {
    title: 'Chi nhánh ngân hàng OCB Nam Định',
    address: '256 Quang Trung, Nam Định',
    description: 'Cung cấp giải pháp nội thất toàn diện cho chi nhánh ngân hàng OCB tại Nam Định.',
    image: '/Ngan_hang_OCB.jpg',
    year: '2024'
  },
  {
    title: 'Cung văn hóa hữu nghị Việt Xô',
    address: '91 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',
    description: 'Thiết kế và thi công nội thất cho không gian văn hóa mang tính biểu tượng của tình hữu nghị Việt - Xô.',
    image: '/cung_van_hoa_huu_nghi_viet_xo.jpg',
    year: '2023'
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]


