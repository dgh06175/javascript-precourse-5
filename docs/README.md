# 구현할 기능 목록

- play 메소드
  comRandomInit 메소드를 사용하여 컴퓨터의 숫자를 정하고
  게임 시작, 게임 동작 함수 호출, 게임 종료시
  userInputForContinue 메소드로
  재시작 물어보고 재시작 or 프로그램 종료

- comRandomInit 메소드
  컴퓨터의 숫자 정보를 초기화하는 메소드
  중복 검사도 하면서 1~9사이의 각자 다른 정수 세개를 하나의 리스트로 만들어서 반환한다.

- playGame 메소드
  게임을 진행하는 메소드.
  playerInput 메소드를 사용하여 플레이어의 입력을 받아서
  countBallStrike 메소드를 이용하여
  볼, 스트라이크 개수를 센 다음, 결과값을 출력하고
  3 스트라이크가 안될 경우 계속 한다는 정보를 리턴하면서 메소드 종료
  3 스트라이크가 될 경우 끝났다는 정보를 리턴하면서 메소드 종료

- countBallStrike 메소드
  볼, 스트라이크 개수 카운트 해서 리턴하는 메소드

- playerInput 메소드
  플레이어에게 입력받은 값을 반환하는 메소드

- userInputForContinue 메소드
  게임 종료 후, 계속할지 그만둘지 유저에게 물어보는 메소드
  유저에게 1 또는 2를 입력받고, 1 입력받을시 true, 2는 false 반환

- 해야할 일
  사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

  MissionUtils 라이브러리에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
  Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.
  사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.

  프로그램 구현이 완료되면 ApplicationTest의 모든 테스트가 성공해야 한다. 테스트가 실패할 경우 0점 처리한다.

  Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
  테스트 도구 사용법이 익숙하지 않다면 **tests**/StringTest.js를 참고하여 학습한 후 테스트를 구현한다.

  github 통해 제출
