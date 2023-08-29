# 미션 - 다리 건너기

위아래 둘 중 하나의 칸만 건널 수 있는 다리를 끝까지 건너가는 게임이다.

### 기능 목록 및 프로그램 설계

- [x] 게임 초기화 하는 메소드 BridgeGame#initGame()

  - [x] 시작 문구 출력. - OutputView#startOutput()
  - [x] 다리의 길이 입력 받기. (3~20) - InputView#readBridgeSize()
  - [x] 다리 생성하기 - BridgeMaker#makeBridge()
        다리 정보를 문자열로 반환 ex)"UDDU"

    - [x] 무작위 값으로 0과 1중에 0이면 아래, 1이면 위 칸이 건널 수 있는 칸 - BridgeRandomNumberGenerator#generate()

- [x] 위칸인 'U' 또는 아래칸인 'D' 입력받는다. - InputView#readMoving()

- [x] 게임 진행.

  - [x] 이동한다. BridgeGame#move()
        입력받은 U,D와 다음 bridge칸의 문자열이 같을경우 true 반환
        입력받은 U,D와 다음 bridge칸의 문자열이 같을경우 false 반환
  - [x] 다리를 출력한다. 현재 진행한 칸 까지 이동한 칸 출력. - OutputView#printMap()

- [x] 이동 완료 후 다음에 뭐 할지 판단하는 메서드 whatNext()

  - [x] 이동에 성공했고 다리를 건넜다면 결과창 출력 후 게임 종료 - OutputView#printResult()
  - [x] 이동에 성공했고 아직 다리를 건너지 못했으면 다시 move()
  - [x] 이동에 실패했을 경우 재시작 R 하거나 종료 Q 입력받는다. - InputView#readGameCommand()
    - [x] 재시작 할 경우 처음에 만든 다리 재사용 - BridgeGame#retry()
    - [x] 종료 할 경우 결과창 출력 후 프로그램 종료 - OutputView#printResult()

#### 예외 상황

- [x] readBridgeSize 예외처리 후 다시 입력 받기
  - [x] 숫자가 아니면 throw
  - [x] 3~20 사이가 아니면 throw
- [x] readMoving 예외처리 후 다시 입력 받기
  - [x] 'U' 또는 'D'가 아니면 throw
- [x] readGameCommand 예외처리 후 다시 입력 받기
  - [x] 'R' 또는 'Q'가 아니면 throw

### 해야할 일

1. README.md 기능목록 작성
2. 프로그램 설계 (추가된 기능 요구 사항, 3주차 공통 피드백 참고)

- 추가된 기능 요구 사항
  1. 메서드 길이 10라인 이하로 작성. 한가지 일만 하도록 구현
  2. 메서드 파라미터 개수 최대 3개까지만 허용
  3. InputView 에서만 readline 가능
  4. bridgeGame에서 InputView, OutputView 사용 불가능

3. 프로그램 작성
4. 한 메소드마다 테스트 코드 작성
