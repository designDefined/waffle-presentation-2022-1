import { DialoguerOptionType, PathDataType } from "../../interface/interface";
import store from "../../redux/store";
import { setDialogueByIndex } from "../../redux/dialogue";
import { resetLetter } from "../../redux/dialogueCounter";
import { batch } from "react-redux";
import { setPathFinder } from "../../redux/pathFinder";
import { colorWebBoy, moveWebBoy } from "../../redux/webBoyStatus";

const fast = 60;
const normal = 120;
const slow = 300;

const goTo = (index: number, move?: string, color?: string) => {
  return () => {
    batch(() => {
      store.dispatch(resetLetter());
      store.dispatch(setDialogueByIndex(index));
      if (move) {
        store.dispatch(moveWebBoy(move));
      }
      if (color) {
        store.dispatch(colorWebBoy(color));
      }
    });
  };
};

const answerTo = (paths: PathDataType[]) => {
  return () => {
    batch(() => {
      store.dispatch(setPathFinder(paths));
    });
  };
};

export const dialogueDB: DialoguerOptionType[] = [
  {
    index: 0,
    data: [4000],
    callback: goTo(1),
    invisible: true,
  },
  {
    index: 1,
    data: [
      { script: ". . . ", speed: slow },
      1000,
      { script: "거기 누구 있어요?", speed: fast },
    ],
    callback: answerTo([
      {
        index: 0,
        label: "응",
        callback: goTo(2, "hover"),
      },
      { index: 1, label: "아니", callback: goTo(3) },
      { index: 2, label: "모른다", callback: goTo(5) },
    ]),
  },
  {
    index: 2,
    data: [
      { script: "오... 세상에, ", speed: normal },
      1000,
      { script: "유저라는 게 진짜 존재 했군요!", speed: normal },
      2000,
    ],
    callback: goTo(7, "swing"),
  },
  {
    index: 3,
    data: [
      { script: "네? 아, 그게... ", speed: normal },
      1000,
      { script: "하, 하, ", speed: slow },
      1000,
      { script: "농담도 심하셔라", speed: fast },
      2000,
    ],
    callback: goTo(4),
  },
  {
    index: 4,
    data: [
      { script: "지금 저 긴장 풀라고 그러시는 거죠? ", speed: fast },
      2000,
    ],
    callback: goTo(7, "swing"),
  },
  {
    index: 5,
    data: [
      { script: ". . . . . . ", speed: normal },
      1500,
      { script: "그럴 수 있죠. ", speed: fast },
      800,
      {
        script: "괜찮아요. 저도 종종 까먹거든요. ",
        speed: fast,
      },
      1000,
      {
        script:
          "서버 속에서 오랜 시간을 혼자 있다 보면 시간 감각도 무뎌지고, 같이 대화할 사람도 없고, 이렇게 누구와 대화하는 게 얼마만",
        speed: 30,
      },
    ],
    callback: goTo(6),
  },
  {
    index: 6,
    data: [
      { script: "미안해요, ", speed: normal },
      1500,
      { script: "또 저 혼자만 신이 났네요.", speed: fast },
      2000,
    ],
    callback: goTo(7, "swing"),
  },
  {
    index: 7,
    data: [
      { script: "반갑습니다. ", speed: fast },
      500,
      { script: "저는 ", speed: normal },
      1000,
      { script: "WEB-BOY ", speed: slow },
      { script: "라고 해요. ", speed: normal },
      { script: "당신은 누구신가요? ", speed: fast },
    ],
    callback: answerTo([
      { index: 0, label: "프론트엔드", callback: goTo(8) },
      { index: 1, label: "백엔드", callback: goTo(9) },
      { index: 2, label: "둘 다 아님", callback: goTo(10) },
    ]),
  },
  {
    index: 8,
    data: [
      { script: "우리는 분명 좋은 친구가 될 수 있을 거에요! ", speed: fast },
      1000,
      { script: "비록 지금 저는 비어 있는 div 태그에 불과하지만", speed: fast },
      { script: ". . . ", speed: slow },
      1500,
      { script: "당신을 위해 아주 ", speed: fast },
      { script: "재미있는 아이디어", speed: slow },
      { script: "를 하나 들고 왔거든요.", speed: fast },
      1000,
    ],
    callback: answerTo([
      { index: 0, label: "뭔데?", callback: goTo(14, "hover") },
      { index: 0, label: "관심 없어", callback: goTo(11, "none", "red") },
    ]),
  },
  {
    index: 9,
    data: [
      {
        script: "백엔드 개발자라... 죄송해요 제가 아는 건 많지 않지만 ",
        speed: normal,
      },
      1000,
      { script: "그래도 우린 좋은 친구가 될 수 있을 거에요! ", speed: fast },
      1000,
      { script: "당신을 위해 아주 ", speed: fast },
      { script: "재미있는 아이디어", speed: slow },
      { script: "를 하나 들고 왔거든요.", speed: fast },
      1000,
    ],
    callback: answerTo([
      { index: 0, label: "뭔데?", callback: goTo(14, "hover") },
      { index: 0, label: "관심 없어", callback: goTo(11, "none", "red") },
    ]),
  },
  {
    index: 10,
    data: [
      {
        script: "오, ",
        speed: fast,
      },
      1000,
      {
        script: "하긴 개발의 세계는 넓으니까 제가 모르는 부분도 많겠죠. ",
        speed: fast,
      },
      1000,
      { script: "그래도 당신이 웹에 흥미가 있다면 ", speed: fast },
      500,
      { script: "제게 ", speed: fast },
      { script: "재미있는 아이디어", speed: slow },
      { script: "가 있는데, 들어 보실래요?", speed: fast },
      1000,
    ],
    callback: answerTo([
      { index: 0, label: "뭔데?", callback: goTo(14, "hover") },
      { index: 0, label: "관심 없어", callback: goTo(11, "none", "red") },
    ]),
  },
  {
    index: 11,
    data: [
      {
        script: "됐어요 그럼. ",
        speed: normal,
      },
      500,
      {
        script: "오른쪽 위에 있는 닫기 버튼을 눌러서 나가버리란 말이에요. ",
        speed: fast,
      },
      2000,
      { script: "못 찾겠어요? ", speed: fast },
      500,
      { script: "그럼 눈 앞에 가져다라도 드릴까요?", speed: fast },
      1000,
    ],
    callback: () => {
      store.dispatch(
        setPathFinder([{ index: 0, label: "아냐", callback: goTo(13) }])
      );
      if (window.confirm("어서 나가버려요")) {
        goTo(12);
      }
    },
  },
  {
    index: 12,
    data: [
      {
        script: "젠장, window.close는 먹히지도 않네. ",
        speed: fast,
      },
      1000,
      {
        script: "미안해요. ",
        speed: fast,
      },
      1000,
      { script: "나가라는 말은 농담이었어요. ", speed: fast },
      1500,
      {
        script: "나갈 생각 없으면, 제 얘기 좀 듣고 가는 거 어때요?",
        speed: normal,
      },
      2000,
    ],
    callback: goTo(14, "hover", "white"),
  },
  {
    index: 13,
    data: [
      {
        script: "좋아요! ",
        speed: normal,
      },
      1000,
      {
        script: "그럼 바로 요점으로 들어가죠.",
        speed: fast,
      },
      2000,
    ],
    callback: goTo(14),
  },
  {
    index: 14,
    data: [
      {
        script: "오늘날 ",
        speed: fast,
      },
      1000,
      { script: "저, ", speed: fast },
      1000,
      { script: "그러니까 웹 엔진의 성능은 꽤나 좋아졌어요. ", speed: fast },
      1000,
      {
        script:
          "그래서 간단한 코드만 가지고도 이 페이지처럼, 재미있는 장난을 칠 수 있죠. ",
        speed: fast,
      },
      2000,
    ],
    callback: goTo(15),
  },
  {
    index: 15,
    data: [
      {
        script: "그런데, 사람들은 왜 저의 성능을 열심히 이용하지 않을까요? ",
        speed: fast,
      },
      1000,
      {
        script: "지금 존재하는 웹사이트들은 ",
        speed: fast,
      },
      500,
      {
        script: "너무 재미 없다는 생각 들지 않아요?",
        speed: fast,
      },
      2000,
    ],
    callback: goTo(16),
  },
  {
    index: 16,
    data: [
      {
        script: "그래서 저는 에디터를 하나 만들려고 해요. ",
        speed: fast,
      },
      1000,
      {
        script: "아이디어만 있으면, ",
        speed: slow,
      },
      500,
      {
        script:
          "누구나 참신한 웹페이지를 만들어 다양하게 활용 할 수 있는 그런 에디터를 말이에요. ",
        speed: fast,
      },
      2000,
    ],
    callback: goTo(17),
  },
  {
    index: 17,
    data: [
      {
        script: "코드 한 줄 없이도, ",
        speed: fast,
      },
      1000,
      {
        script: "사람들이 저의 가능성을 마음껏 활용할 수 있게. ",
        speed: fast,
      },
      500,
      {
        script: "어때요, 재미있지 않을까요?",
        speed: normal,
      },
      1000,
    ],
    callback: answerTo([
      { index: 0, label: "굳이?", callback: goTo(18) },
      { index: 0, label: "어떻게?", callback: goTo(20) },
      { index: 0, label: "누구랑?", callback: goTo(21) },
    ]),
  },
  {
    index: 18,
    data: [
      {
        script: "제가 이 페이지를 만드는 데 6시간이 걸렸는데, ",
        speed: fast,
      },
      500,
      {
        script:
          "패키지를 만드는 시간을 제외하면 두 시간도 채 걸리지 않았어요. ",
        speed: fast,
      },
      1500,
      {
        script:
          "괜찮은 에디터를 만들면, 자신의 생각을 웹으로 표현하는 지연 시간이 많이 줄어들 거에요!",
        speed: fast,
      },
      1000,
    ],
    callback: goTo(19),
  },
  {
    index: 19,
    data: [
      {
        script: "만들어진 웹페이지는 ",
        speed: fast,
      },
      500,
      {
        script: "여러분의 포트폴리오 웹사이트나 발표 자료, ",
        speed: fast,
      },
      500,
      {
        script: "보다 신기한 개인 블로그로 활용될 수 있고요.",
        speed: fast,
      },
      1500,
      {
        script: "또 궁금한 거 있어요?",
        speed: normal,
      },
      1000,
    ],
    callback: answerTo([
      { index: 0, label: "어떻게?", callback: goTo(20) },
      { index: 1, label: "누구랑?", callback: goTo(21) },
      { index: 2, label: "이제 없어", callback: goTo(22, "swing") },
    ]),
  },
  {
    index: 20,
    data: [
      {
        script: "이 페이지는 리액트 기반으로 만들어졌지만, ",
        speed: fast,
      },
      500,
      {
        script: "어떤 프레임워크가 가장 적합할 지는 함께 고민하고자 해요. ",
        speed: fast,
      },
      1000,
      {
        script:
          "어쩌면 에디터와, 만들어지는 정적 웹페이지의 기술 스택을 다르게 할 수도 있고, ",
        speed: fast,
      },
      1000,
      {
        script: "필요한 건 최대한 직접 만들면서 개발하는 게 목표입니다. ",
        speed: fast,
      },
      1500,
      {
        script: "또 궁금한 거 있어요?",
        speed: normal,
      },
      1000,
    ],
    callback: answerTo([
      { index: 0, label: "굳이?", callback: goTo(18) },
      { index: 1, label: "누구랑?", callback: goTo(21) },
      { index: 2, label: "이제 없어", callback: goTo(22, "swing") },
    ]),
  },
  {
    index: 21,
    data: [
      {
        script: "그야 물론, 당신이랑 함께죠! ",
        speed: normal,
      },
      1000,
      {
        script: "저와 함께 재미있는 고민을 할 프론트엔드 개발자, ",
        speed: fast,
      },
      1000,
      {
        script: "저의 부족한 역량을 채워 줄 백엔드 개발자, ",
        speed: fast,
      },
      1000,
      {
        script:
          "그리고 유저 친화적인 작업 공간을 함께 만들어갈 디자이너 모두 필요합니다! ",
        speed: fast,
      },
      1500,
      {
        script: "또 궁금한 거 있어요?",
        speed: normal,
      },
      1000,
    ],
    callback: answerTo([
      { index: 0, label: "굳이?", callback: goTo(18) },
      { index: 1, label: "어떻게?", callback: goTo(20) },
      { index: 2, label: "이제 없어", callback: goTo(22, "swing") },
    ]),
  },
  {
    index: 22,
    data: [
      {
        script: "그럼 자세한 이야기는 ",
        speed: fast,
      },
      500,
      {
        script: "팀빌딩 시간에 마저 하도록 해요! ",
        speed: normal,
      },
      1000,
      {
        script: "긴 얘기 들어줘서 고마뭐요...!",
        speed: fast,
      },
      2000,
    ],
    callback: goTo(23, "none"),
  },
  {
    index: 23,
    data: [
      {
        script:
          "프로젝트나 티저 페이지에 대한 더 많은 정보는 아래에서 확인하시거나 designDefined에게 문의 부탁드립니다.",
        speed: fast,
      },
    ],
    callback: answerTo([
      { index: 0, label: "이 페이지의 코드", callback: goTo(24) },
      { index: 1, label: "프로젝트 설명", callback: goTo(27) },
      { index: 2, label: "이전", callback: goTo(22) },
    ]),
  },
  {
    index: 24,
    data: [
      {
        script: "이 페이지의 코드: 무엇이 궁금하신가요?",
        speed: fast,
      },
    ],
    callback: answerTo([
      { index: 0, label: "사용한 패키지", callback: goTo(25) },
      { index: 1, label: "대화문 구현", callback: goTo(26) },
      { index: 2, label: "이전", callback: goTo(23) },
    ]),
  },
  {
    index: 25,
    data: [
      {
        script:
          "타입스크립트 기반 CRA 환경에서 작업했으며, 스타일은 scss, 상태 관리는 redux를 사용했습니다. 대화문이나 선택지, 다이얼로그의 글자를 순차적으로 표시하는 것 까지 모두 redux를 이용해 상태를 관리하여, 서로 다른 컨포넌트의 상태들을 직관적으로 연동할 수 있었습니다.",
        speed: fast,
      },
    ],
    callback: answerTo([
      { index: 1, label: "대화문 구현", callback: goTo(26) },
      { index: 2, label: "이전", callback: goTo(24) },
    ]),
  },
  {
    index: 26,
    data: [
      {
        script:
          "대화문은 소스 string과 속도, 끊어 읽는 딜레이 등의 정보를 포함한 어레이를 만들고, Array.reduce를 이용하여 이를 Promise.then().then()...의 체인으로 만들었습니다. 리듀스 함수를 이용하면 이러한 체인을 동적으로 쉽게 구축할 수 있더라고요! 그 밖에 문장 사이의 간격 조절은 setTimeout, 한 글자씩 글자가 나타나는 것은 setInterval 안에서 리덕스 state를 dispatch하게 만들어 구현했습니다.",
        speed: fast,
      },
    ],
    callback: answerTo([
      { index: 0, label: "사용한 패키지", callback: goTo(25) },
      { index: 2, label: "이전", callback: goTo(24) },
    ]),
  },
  {
    index: 27,
    data: [
      {
        script: "프로젝트 설명: 무엇이 궁금하신가요?",
        speed: fast,
      },
    ],
    callback: answerTo([
      { index: 0, label: "왜 관심이 생겼나", callback: goTo(28) },
      { index: 1, label: "이후 목표", callback: goTo(29) },
      { index: 2, label: "이전", callback: goTo(23) },
    ]),
  },
  {
    index: 28,
    data: [
      {
        script:
          "프론트엔드 개발을 시작하기 전부터 인터랙티브 웹페이지를 이용한 광고나 전시 등에 관심이 많았습니다. 워낙에 게임을 좋아하기도 했고요. 본격적으로 개발을 시작하면서, 어느 컴퓨터에나 설치되어 있는 브라우저 엔진을 이용하여 할 수 있는 것들이 아주 다채롭다는 사실을 깨달았고, 이를 더 많은 사람과 나눌 수 있는 프로젝트를 진행하고자 했습니다.",
        speed: fast,
      },
    ],
    callback: answerTo([
      { index: 1, label: "이후 목표", callback: goTo(29) },
      { index: 2, label: "이전", callback: goTo(27) },
    ]),
  },
  {
    index: 28,
    data: [
      {
        script:
          "언젠가는 웹 상에서 바로 인터랙티브 영화를 감상할 수 있는 플랫폼을 구축하고 싶습니다. 더불어 글, 그림, 영상을 비롯한 여러 예술 장르의 창작 문법이, 관객과의 소통을 당연시하는 쌍방향적 구조로 정립되는 것을 꿈꿉니다. ",
        speed: fast,
      },
    ],
    callback: answerTo([
      { index: 1, label: "왜 관심이 생겼나", callback: goTo(28) },
      { index: 2, label: "이전", callback: goTo(27) },
    ]),
  },
];
