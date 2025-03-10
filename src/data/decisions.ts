import { Decision } from "../pages/GamePlay";

export const ARRAY_LENGTH = 30;

export const decisions: Decision[] = [
  {
    id: 1,
    message: "Thưa ngài, chúng tôi vừa tìm được một mỏ vàng ở phía nam!",
    character: "Bộ trưởng Kinh tế",
    left: {
      answer: "Chúng ta giàu rồi!",
      effect: { economy: +10, environment: -10, human: +10, army: +10 },
    },
    right: {
      answer: "Ta giàu rồi!",
      effect: { economy: +10, environment: -10 },
    },
  },
  {
    id: 2,
    message:
      "Dân chúng đang lo ngại về biến đổi khí hậu. Chúng ta có nên ban hành luật bảo vệ môi trường không?",
    character: "Nhà môi trường học",
    left: {
      answer: "Ban hành luật ngay!",
      effect: { environment: +10, economy: -10, human: +10 },
    },
    right: {
      answer: "Không, kinh tế là quan trọng hơn!",
      effect: { economy: +10, environment: -10 },
    },
  },
  {
    id: 3,
    message: "Có một quốc gia láng giềng đang đe dọa biên giới của chúng ta!",
    character: "Tướng Quân đội",
    left: {
      answer: "Gia tăng ngân sách quân sự!",
      effect: { army: +10, economy: -10 },
    },
    right: {
      answer: "Tìm kiếm một giải pháp ngoại giao.",
      effect: { human: +10, army: -10 },
    },
  },
  {
    id: 4,
    message:
      "Người dân đang phản đối giá cả tăng cao và yêu cầu chính phủ can thiệp!",
    character: "Lãnh đạo dân sự",
    left: {
      answer: "Kiểm soát giá ngay!",
      effect: { economy: -10, human: +10 },
    },
    right: {
      answer: "Để thị trường tự điều chỉnh.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 5,
    message:
      "Chúng ta có nên ký hiệp định thương mại mới với nước ngoài không?",
    character: "Cố vấn Chính phủ",
    left: {
      answer: "Đồng ý ký kết!",
      effect: { economy: +10, human: +10 },
    },
    right: {
      answer: "Cẩn trọng, xem xét kỹ lưỡng.",
      effect: { economy: -10, human: +10 },
    },
  },
  {
    id: 6,
    message:
      "Dịch bệnh bùng phát! Chúng ta có nên đầu tư nhiều hơn vào hệ thống y tế không?",
    character: "Bộ trưởng Y tế",
    left: {
      answer: "Tăng ngân sách y tế!",
      effect: { human: +10, economy: -10 },
    },
    right: {
      answer: "Không, ưu tiên kinh tế trước.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 7,
    message:
      "Hệ thống giáo dục đang xuống cấp. Chúng ta có nên tăng lương cho giáo viên không?",
    character: "Bộ trưởng Giáo dục",
    left: {
      answer: "Tăng lương ngay!",
      effect: { human: +10, economy: -10 },
    },
    right: {
      answer: "Không, ngân sách đang hạn chế.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 8,
    message:
      "Một công ty nước ngoài muốn đầu tư vào đất nước chúng ta. Chúng ta có nên cho phép không?",
    character: "Bộ trưởng Kinh tế",
    left: {
      answer: "Chấp nhận đầu tư!",
      effect: { economy: +15, human: +10 },
    },
    right: {
      answer: "Từ chối, bảo vệ doanh nghiệp trong nước!",
      effect: { economy: -10, human: +10 },
    },
  },
  {
    id: 9,
    message:
      "Một khu rừng quan trọng đang bị đốn hạ để xây khu công nghiệp. Chúng ta có nên can thiệp không?",
    character: "Nhà môi trường học",
    left: {
      answer: "Ngăn chặn ngay lập tức!",
      effect: { environment: +10, economy: -10 },
    },
    right: {
      answer: "Ưu tiên phát triển công nghiệp!",
      effect: { economy: +10, environment: -10 },
    },
  },
  {
    id: 10,
    message:
      "Có báo cáo về tham nhũng trong bộ máy chính phủ. Chúng ta nên làm gì?",
    character: "Cố vấn Chính phủ",
    left: {
      answer: "Mở cuộc điều tra toàn diện!",
      effect: { human: +10, economy: -10 },
    },
    right: {
      answer: "Che đậy để giữ ổn định!",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 11,
    message:
      "Giáo viên biểu tình yêu cầu tăng ngân sách giáo dục. Chúng ta có nên đáp ứng không?",
    character: "Bộ trưởng Giáo dục",
    left: {
      answer: "Tăng ngân sách ngay!",
      effect: { human: +10, economy: -10 },
    },
    right: {
      answer: "Không thể, ngân sách đang eo hẹp!",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 12,
    message:
      "Hệ thống bệnh viện đang quá tải do dịch bệnh. Chúng ta có nên mở rộng bệnh viện không?",
    character: "Bộ trưởng Y tế",
    left: {
      answer: "Đầu tư ngay lập tức!",
      effect: { human: +15, economy: -10 },
    },
    right: {
      answer: "Không thể, chúng ta không đủ ngân sách!",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 13,
    message:
      "Một nhà khoa học tuyên bố có thể phát triển công nghệ năng lượng sạch. Chúng ta có nên tài trợ không?",
    character: "Nhà khoa học",
    left: {
      answer: "Tài trợ ngay lập tức!",
      effect: { environment: +15, economy: -10 },
    },
    right: {
      answer: "Không, chưa có đủ bằng chứng!",
      effect: { economy: +10, environment: -10 },
    },
  },
  {
    id: 14,
    message:
      "Chúng ta có nên bắt buộc tiêm vaccine cho tất cả người dân không?",
    character: "Bộ trưởng Y tế",
    left: {
      answer: "Bắt buộc tiêm vaccine!",
      effect: { human: +10, army: -10 },
    },
    right: {
      answer: "Để người dân tự quyết định!",
      effect: { human: -10, economy: +10 },
    },
  },
  {
    id: 15,
    message:
      "Một nhóm nhà khoa học đề xuất chương trình khám phá vũ trụ. Chúng ta có nên đầu tư không?",
    character: "Nhà khoa học",
    left: {
      answer: "Đồng ý, đây là tương lai!",
      effect: { economy: -10, human: +10 },
    },
    right: {
      answer: "Không, có nhiều vấn đề quan trọng hơn!",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 16,
    message:
      "Có ý kiến đề xuất nghĩa vụ quân sự bắt buộc cho tất cả thanh niên. Chúng ta có nên thực hiện không?",
    character: "Tướng Quân đội",
    left: {
      answer: "Thực hiện ngay!",
      effect: { army: +15, human: -10 },
    },
    right: {
      answer: "Không, chúng ta cần nhân lực cho nền kinh tế!",
      effect: { economy: +10, army: -10 },
    },
  },
  {
    id: 17,
    message:
      "Một vụ bê bối tham nhũng lớn bị phanh phui. Chúng ta nên xử lý thế nào?",
    character: "Cố vấn Chính phủ",
    left: {
      answer: "Trừng phạt nghiêm khắc!",
      effect: { human: +10, economy: -10 },
    },
    right: {
      answer: "Dìm xuống để tránh bất ổn!",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 18,
    message:
      "Một công ty công nghệ trong nước đang phát triển AI tiên tiến. Chúng ta có nên tài trợ cho họ không?",
    character: "Nhà khoa học",
    left: {
      answer: "Tài trợ để thúc đẩy đổi mới!",
      effect: { economy: +10, human: +10 },
    },
    right: {
      answer: "Không, đầu tư vào những thứ thiết thực hơn.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 19,
    message:
      "Một nghiên cứu mới cho thấy biến đổi khí hậu ảnh hưởng nghiêm trọng đến sản xuất nông nghiệp!",
    character: "Nhà môi trường học",
    left: {
      answer: "Hỗ trợ nông dân chuyển sang mô hình bền vững.",
      effect: { environment: +10, economy: -10, human: +10 },
    },
    right: {
      answer: "Tiếp tục mô hình hiện tại.",
      effect: { environment: -10, economy: +10 },
    },
  },
  {
    id: 20,
    message: "Có đề xuất xây dựng một trung tâm nghiên cứu vũ trụ quốc gia!",
    character: "Nhà khoa học",
    left: {
      answer: "Đồng ý, khoa học cần phát triển!",
      effect: { economy: -10, human: +10 },
    },
    right: {
      answer: "Không, ưu tiên các vấn đề thực tế hơn.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 21,
    message: "Các bệnh viện đang quá tải vì thiếu bác sĩ và cơ sở vật chất!",
    character: "Bộ trưởng Y tế",
    left: {
      answer: "Tăng cường đầu tư vào y tế!",
      effect: { human: +10, economy: -10 },
    },
    right: {
      answer: "Không thể, ngân sách đang hạn chế.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 22,
    message:
      "Một tổ chức quốc tế đề xuất hỗ trợ tài chính nếu chúng ta cam kết giảm phát thải khí nhà kính.",
    character: "Nhà môi trường học",
    left: {
      answer: "Chấp nhận đề xuất và hướng đến phát triển bền vững.",
      effect: { environment: +10, economy: +10 },
    },
    right: {
      answer: "Từ chối, tập trung phát triển kinh tế nội địa.",
      effect: { economy: +10, environment: -10 },
    },
  },
  {
    id: 23,
    message:
      "Tội phạm mạng đang gia tăng, gây ảnh hưởng lớn đến doanh nghiệp và người dân.",
    character: "Cố vấn Chính phủ",
    left: {
      answer: "Tăng cường an ninh mạng!",
      effect: { human: +10, economy: -10 },
    },
    right: {
      answer: "Chưa cần thiết, ưu tiên vấn đề khác.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 24,
    message: "Một công ty nước ngoài muốn xây dựng nhà máy lớn tại nước ta!",
    character: "Bộ trưởng Kinh tế",
    left: {
      answer: "Chấp nhận, tạo việc làm cho người dân.",
      effect: { economy: +10, human: +10, environment: -10 },
    },
    right: {
      answer: "Từ chối, tránh ô nhiễm môi trường.",
      effect: { environment: +10, economy: -10 },
    },
  },
  {
    id: 25,
    message: "Chúng ta có nên đưa chương trình AI vào giáo dục đại học?",
    character: "Bộ trưởng Giáo dục",
    left: {
      answer: "Đồng ý, giúp sinh viên bắt kịp xu hướng!",
      effect: { human: +10, economy: +10 },
    },
    right: {
      answer: "Không, tập trung vào những kỹ năng cơ bản.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 26,
    message: "Một tập đoàn đa quốc gia đề xuất đầu tư vào ngành du lịch!",
    character: "Bộ trưởng Kinh tế",
    left: {
      answer: "Chấp nhận, du lịch sẽ phát triển!",
      effect: { economy: +10, human: +10, environment: -10 },
    },
    right: {
      answer: "Từ chối, ưu tiên bảo tồn văn hóa bản địa.",
      effect: { environment: +10, economy: -10 },
    },
  },
  {
    id: 27,
    message: "Có đề xuất mở rộng nghĩa vụ quân sự bắt buộc!",
    character: "Tướng Quân đội",
    left: {
      answer: "Đồng ý, tăng cường sức mạnh quốc phòng!",
      effect: { army: +10, human: -10 },
    },
    right: {
      answer: "Không, cần tôn trọng quyền tự do cá nhân.",
      effect: { human: +10, army: -10 },
    },
  },
  {
    id: 28,
    message:
      "Một công ty y tế muốn thử nghiệm thuốc mới trên tình nguyện viên.",
    character: "Bộ trưởng Y tế",
    left: {
      answer: "Đồng ý, nhưng phải đảm bảo an toàn!",
      effect: { human: +10, economy: +10 },
    },
    right: {
      answer: "Không, thử nghiệm chưa đủ an toàn.",
      effect: { human: +10, economy: -10 },
    },
  },
  {
    id: 29,
    message: "Dân số già hóa nhanh chóng! Có nên tăng tuổi nghỉ hưu không?",
    character: "Cố vấn Chính phủ",
    left: {
      answer: "Tăng tuổi nghỉ hưu để giảm áp lực kinh tế.",
      effect: { economy: +10, human: -10 },
    },
    right: {
      answer: "Không, đảm bảo người lao động được nghỉ sớm.",
      effect: { human: +10, economy: -10 },
    },
  },
  {
    id: 30,
    message: "Hệ thống giao thông đang quá tải, có nên tăng thuế xe cá nhân?",
    character: "Bộ trưởng Kinh tế",
    left: {
      answer: "Đồng ý, khuyến khích giao thông công cộng!",
      effect: { environment: +10, economy: -10 },
    },
    right: {
      answer: "Không, điều đó sẽ gây khó khăn cho người dân.",
      effect: { human: +10, economy: -10 },
    },
  },
];
