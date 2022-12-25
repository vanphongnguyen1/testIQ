const { Module } = require("module");

const listQuestion = [
  {
    id: 1,
    question:
      "Nhà Thanh có ao bèo 1.000m2, ngày hôm sau số lượng bèo sẽ nở gấp đôi ngày hôm trước, đến ngày thứ 18 thì bèo đã nở được nửa ao. Vậy đến ngày thứ bao nhiêu thì bèo sẽ nở đầy ao?",
    options: [
      {
        id: 1,
        answer: "Ngày thứ 1",
      },
      {
        id: 2,
        answer: "Ngày thứ 19",
      },
      {
        id: 3,
        answer: "Ngày thứ 36",
      },
      {
        id: 4,
        answer: "Ngày thứ 42",
      },
    ],
    result: "Ngày thứ 19",
  },
  {
    id: 2,
    question:
      "Tiền thuê 1 chỗ đậu xe trong gara là 10 đôla/tuần hoặc 30 đôla/tháng. Một người có thể tiết kiệm được bao nhiêu tiền trong 1 năm nếu thuê theo tháng?",
    options: [
      {
        id: 1,
        answer: "140",
      },
      {
        id: 2,
        answer: "160",
      },
      {
        id: 3,
        answer: "240",
      },
      {
        id: 4,
        answer: "260",
      },
    ],
    result: "160",
  },
  {
    id: 3,
    question:
      "Các đồng xu được thả vào một cái hộp với tốc độ 2 fit khối/giờ. Nếu một hộp rỗng có kích thước là dài 4 fit, rộng 4 fit và sâu 3 fit, sẽ mất bao lâu để đôt đầy chiếc hộp đó?",
    options: [
      {
        id: 1,
        answer: "24",
      },
      {
        id: 2,
        answer: "16",
      },
      {
        id: 3,
        answer: "8",
      },
      {
        id: 4,
        answer: "48",
      },
    ],
    result: "24",
  },
  {
    id: 4,
    question:
      "Một đội bóng rổ chơi được 2/3 trận đấu và đã thắng 17 bàn, thua 3 bàn. Trong suốt trận đấu còn lại đội bóng có thể thua nhiều nhất bao nhiêu mà vẫn thắng ít nhất 3/4 toàn trận đấu?",
    options: [
      {
        id: 1,
        answer: "5",
      },
      {
        id: 2,
        answer: "3",
      },
      {
        id: 3,
        answer: "4",
      },
      {
        id: 4,
        answer: "7",
      },
    ],
    result: "4",
  },
  {
    id: 5,
    question:
      " Nếu x và y là các số nguyên tố thì các giá trị nào trong các giá trị sau không thể là tổng của x và y?",
    options: [
      {
        id: 1,
        answer: "13",
      },
      {
        id: 2,
        answer: "9",
      },
      {
        id: 3,
        answer: "16",
      },
      {
        id: 4,
        answer: "23",
      },
    ],
    result: "23",
  },
  {
    id: 6,
    question: " Hãy tính dãy số sau đây: 1 + 2 + 3 + ..... + 99 = ...........",
    options: [
      {
        id: 1,
        answer: "4950",
      },
      {
        id: 2,
        answer: "4500",
      },
      {
        id: 3,
        answer: "4850",
      },
      {
        id: 4,
        answer: "4650",
      },
    ],
    result: "4950",
  },
  {
    id: 7,
    question:
      " Minh 4 tuổi, tuổi anh Minh gấp 3 lần tuổi Minh. Khi anh Minh bao nhiêu tuổi thì tuổi anh Minh chỉ còn gấp đôi tuổi Minh?",
    options: [
      {
        id: 1,
        answer: "20",
      },
      {
        id: 2,
        answer: "14",
      },
      {
        id: 3,
        answer: "18",
      },
      {
        id: 4,
        answer: "16",
      },
    ],
    result: "16",
  },
  {
    id: 8,
    question:
      "  Abarat là để chỉ một người đàn ông. Baba là để chỉ nhưng người đàn ông Abarat có tóc nâu. Cing là để những người đàn ông có tóc vàng. Decer là để chỉ những Baba có ít nhất 3 cánh tay. Nếu một người đàn ông có tóc nâu và 4 cánh tay thì người đó thuộc bộ tộc nào là thích hợp nhất ?",
    options: [
      {
        id: 1,
        answer: "Abarat",
      },
      {
        id: 2,
        answer: "Cing",
      },
      {
        id: 3,
        answer: "Baba",
      },
      {
        id: 4,
        answer: "Decer",
      },
    ],
    result: "Decer",
  },
  {
    id: 9,
    question:
      " Một vài fan của Trấn Thành là fan của Trường Giang. Và một vài fan của Trường Giang đồng thời là fan của Lê Giang. Như vậy một vài fan của Trấn Thành chắc chăn là fan của Lê Giang? ",
    options: [
      {
        id: 1,
        answer: "Rất chuẩn",
      },
      {
        id: 2,
        answer: "Sai rồi",
      },
    ],
    result: "Sai Rồi",
  },
  {
    id: 10,
    question:
      " Nếu a = b , b > c , c < d thì mối quan hệ nào sau đây giữa a và d là đúng ?",
    options: [
      {
        id: 1,
        answer: "a > d",
      },
      {
        id: 2,
        answer: "a < d",
      },
      {
        id: 3,
        answer: "a = d",
      },
      {
        id: 4,
        answer: "Chưa đủ cơ sở để xác định",
      },
    ],
    result: "Chưa đủ cơ sở để xác định",
  },
];

Module.exports = {
  listQuestion,
};
