import React from "react";

const PointTable = () => {
  const pointData = [
    {
      id: "test",
      name: "테스트",
      nickname: "테스트",
      content: "kim1004의 추천인",
      point: 500,
      date: "2015-11-12 15:57:37",
      total: 2700,
    },
    {
      id: "kim1004",
      name: "김수한무",
      nickname: "거북이와두루미",
      content: "회원가입 축하",
      point: 1000,
      date: "2015-11-12 12:55:37",
      total: 1000,
    },
    // 필요 시 추가
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 font-sans">
      <h2 className="text-2xl font-bold mb-4">포인트 정보</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-center border border-gray-300">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2 border">회원아이디</th>
              <th className="px-4 py-2 border">이름</th>
              <th className="px-4 py-2 border">닉네임</th>
              <th className="px-4 py-2 border">포인트내용</th>
              <th className="px-4 py-2 border">포인트</th>
              <th className="px-4 py-2 border">일시</th>
              <th className="px-4 py-2 border">포인트합</th>
            </tr>
          </thead>
          <tbody>
            {pointData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 transition duration-200"
              >
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.nickname}</td>
                <td className="px-4 py-2 border">{item.content}</td>
                <td className="px-4 py-2 border">
                  {item.point.toLocaleString()}
                </td>
                <td className="px-4 py-2 border">{item.date}</td>
                <td className="px-4 py-2 border">
                  {item.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointTable;
