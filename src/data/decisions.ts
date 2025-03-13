import { Decision } from "../pages/GamePlay";

export const ARRAY_LENGTH = 20;

export const decisions: Decision[] = [
  {
    id: 1,
    message:
      "Thưa ngài, chúng ta vừa phát hiện một mỏ vàng ở phía nam. Ngài muốn xử lý thế nào?",
    character: "Bộ trưởng Kinh tế",
    right: {
      answer: "Mở đấu thầu công khai, phải minh bạch!",
      effect: { economy: +10, environment: -15, army: +10 },
    },
    left: {
      answer:
        "Mở đấu thầu, chọn công ty cho chúng ta ‘giá tốt nhất’, hiểu chứ?",
      effect: { economy: +10, environment: -15, human: -10 },
    },
  },
  {
    id: 2,
    message:
      "Người dân đang lo ngại về biến đổi khí hậu và yêu cầu luật bảo vệ môi trường. Ngài có nên hành động ngay không?",
    character: "Nhà môi trường học",
    left: {
      answer: "Ban hành luật ngay!",
      effect: { environment: +5, economy: -5 },
    },
    right: {
      answer: "Tạm hoãn để ưu tiên lợi ích của các tập đoàn.",
      effect: { economy: +10, environment: -15, human: -10 },
    },
  },
  {
    id: 3,
    message: "Quân đội cần mua quân phục mới. Ngài quyết định thế nào?",
    character: "Tướng Quân đội",
    left: {
      answer: "Gia tăng ngân sách quân sự minh bạch!",
      effect: { army: +10, economy: -5 },
    },
    right: {
      answer: "Ký hợp đồng với bên cung cấp cho chúng ta nhiều ‘Ưu đãi’.",
      effect: { army: +10, economy: +5, human: -10 },
    },
  },
  {
    id: 4,
    message:
      "Giá cả đang tăng mạnh, dân chúng rất bất mãn. Chúng ta có nên can thiệp không?",
    character: "Lãnh đạo dân sự",
    left: {
      answer: "Kiểm soát giá ngay!",
      effect: { economy: +15, human: +10 },
    },
    right: {
      answer: "Để thị trường tự điều chỉnh.",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 5,
    message: "Có một hiệp định thương mại mới. Ngài có muốn ký không?",
    character: "Cố vấn Chính phủ",
    right: {
      answer: "Đồng ý ký kết minh bạch!",
      effect: { economy: +10, human: +10 },
    },
    left: {
      answer: "Ký kết với điều kiện ưu đãi cho chúng ta!",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 6,
    message:
      "Dịch bệnh đang lan rộng, bệnh viện quá tải. Chúng ta cần hỗ trợ cho họ, nhưng 10% thì tôi và ngài sẽ...",
    character: "Bộ trưởng Y tế",
    right: {
      answer: "Anh sẽ bị thay thế! Tôi ghét tham nhũng!",
      effect: { human: +10, economy: -5, army: +5 },
    },
    left: {
      answer: "20% thì còn nghe được",
      effect: { economy: -10, human: +10, army: -5 },
    },
  },
  {
    id: 7,
    message:
      "Giáo viên đang đình công đòi tăng lương. Ngài muốn giải quyết thế nào?",
    character: "Bộ trưởng Giáo dục",
    left: {
      answer: "Tăng lương minh bạch!",
      effect: { human: +10, economy: -5 },
    },
    right: {
      answer: "Giải ngân ngay! Nhưng phần dư thì…",
      effect: { economy: -10, human: -10 },
    },
  },
  {
    id: 8,
    message:
      "Một công ty nước ngoài muốn đầu tư lớn vào nước ta. Chúng ta có nên chấp nhận không?",
    character: "Bộ trưởng Kinh tế",
    left: {
      answer: "Chấp nhận đầu tư với giám sát minh bạch!",
      effect: { economy: +5, human: +10, army: -5 },
    },
    right: {
      answer: "Nhận ‘hoa hồng’ để cấp phép dễ dàng!",
      effect: { economy: +10, human: -10, army: -10 },
    },
  },
  {
    id: 9,
    message:
      "Có thông tin về một vụ phá rừng lớn. Chúng ta có nên can thiệp không?",
    character: "Nhà môi trường học",
    right: {
      answer: "Cấp 1 tỷ, cần xử lí ngay",
      effect: { environment: -10, economy: -10 },
    },
    left: {
      answer: "Cấp 1 tỷ! Nhưng chúng ta có 20%",
      effect: { economy: +5, environment: -15, human: -10 },
    },
  },
  {
    id: 10,
    message:
      "Có báo cáo về tham nhũng trong chính phủ. Chúng ta có nên điều tra không?",
    character: "Cố vấn Chính phủ",
    left: {
      answer: "Mở cuộc điều tra!",
      effect: { human: +10, economy: -5 },
    },
    right: {
      answer: "Che đậy giữ ổn định!",
      effect: { economy: +5, human: -10 },
    },
  },
  {
    id: 11,
    message:
      "Thưa ngài, một tập đoàn lớn muốn được miễn thuế để đầu tư vào nước ta. Chúng ta có nên chấp thuận không?",
    character: "Bộ trưởng Kinh tế",
    right: {
      answer: "Không, mọi doanh nghiệp đều phải đóng thuế công bằng.",
      effect: { economy: +20, human: +10, army: -5 },
    },
    left: {
      answer: "Đồng ý, miễn là họ 'hỗ trợ' chúng ta một khoản.",
      effect: { economy: +10, human: -10, army: -10 },
    },
  },
  {
    id: 12,
    message:
      "Thưa ngài, một nhà máy thép mới sẽ tạo nhiều việc làm, nhưng cũng gây ô nhiễm nặng.",
    character: "Nhà môi trường học",
    left: {
      answer: "Không, phải ưu tiên môi trường và sức khỏe người dân.",
      effect: { economy: -5, human: -5 },
    },
    right: {
      answer: "Phê duyệt ngay!",
      effect: { economy: +5, human: -10 },
    },
  },
  {
    id: 13,
    message: "Năng lượng sạch cần tài trợ",
    character: "Nhà khoa học",
    left: {
      answer: "Tài trợ minh bạch!",
      effect: { environment: +5, economy: -10, human: +5 },
    },
    right: {
      answer: "Không, chúng ta cần tiết kiệm ngân sách!",
      effect: { economy: +5, environment: -20, human: -5 },
    },
  },
  {
    id: 14,
    message:
      "Thưa ngài, có một công ty muốn độc quyền cung cấp điện trong nước. Ngài có chấp thuận không?",
    character: "Bộ trưởng Kinh tế",
    left: {
      answer: "Dân chúng có thể bị ảnh hưởng lớn, cần xem xét lại.",
      effect: { human: +5, army: +5, economy: -5, environment: +5 },
    },
    right: {
      answer: "Đồng ý, miễn là họ 'biết điều'.",
      effect: { human: -10 },
    },
  },
  {
    id: 15,
    message:
      "Thưa ngài, truyền thông và dân chúng đang yêu cầu sao kê tiền ủng hộ lũ lụt.",
    character: "Cố vấn Chính phủ",
    right: {
      answer: "Có, công khai minh bạch.",
      effect: { human: +5, economy: +5 },
    },
    left: {
      answer: "Kiểm soát báo chí, dẹp chuyện này đi.",
      effect: { human: -10, economy: +5 },
    },
  },
  {
    id: 16,
    message:
      "Thưa ngài, một công ty dược muốn bán một loại thuốc mới nhưng chưa kiểm định kỹ lưỡng. Có nên chấp thuận không?",
    character: "Bộ trưởng Y tế",
    right: {
      answer: "Không, sức khỏe của người dân quan trọng hơn.",
      effect: { human: +10, economy: -10 },
    },
    left: {
      answer: "Cứ phê duyệt nhanh, miễn là có 'khoản phí' hợp lý.",
      effect: { human: -10, economy: +5 },
    },
  },
  {
    id: 17,
    message: "Vụ bê bối tham nhũng bị phanh phui",
    character: "Cố vấn Chính phủ",
    left: {
      answer: "Trừng phạt nghiêm khắc!",
      effect: { human: +10, economy: +5 },
    },
    right: {
      answer: "Dìm xuống tránh bất ổn!",
      effect: { economy: +10, human: -10 },
    },
  },
  {
    id: 18,
    message:
      "Cải cách giáo dục STEM. Chúng ta cần ưu tiên các mầm non của đất nước!",
    character: "Cố vấn Chính phủ",
    left: {
      answer: "Đầu tư minh bạch vào chương trình STEM!",
      effect: { human: +5, economy: -5, army: +5 },
    },
    right: {
      answer: "Ưu tiên các vấn đề khác!",
      effect: { economy: -5, army: +5, environment: +5 },
    },
  },
  {
    id: 19,
    message: "Cơ sở hạ tầng giao thông cần được nâng cấp!",
    character: "Cố vấn Chính phủ",
    right: {
      answer: "Mở thầu minh bạch, ưu tiên hiệu quả!",
      effect: { economy: -10, human: +5, environment: -20, army: +5 },
    },
    left: {
      answer: "Mở đấu thầu, ưu tiên 'lợi ích' của chúng ta.",
      effect: { environment: -20, economy: +5, human: -5, army: -5 },
    },
  },
  {
    id: 20,
    message: "Miễn học phí cấp 1 và 2 cho hộ nghèo và cận nghèo",
    character: "Bộ trưởng Giáo dục",
    left: {
      answer: "Hỗ trợ đúng đối tượng, tối ưu nguồn lực!",
      effect: { economy: -10, human: +5, army: +5 },
    },
    right: {
      answer: "Cấp 1 khoản ngân sách định kỳ, không cần giám sát!",
      effect: { economy: -15, human: -5, army: -10 },
    },
  },
];
