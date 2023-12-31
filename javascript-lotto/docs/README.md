# 로또

## 미션 목표
1. 클래스(객체)를 분리하는 연습
2. 도메인 로직에 대한 단위 테스트를 작성하는 연습
3. 값을 하드 코딩 하지 않는다
4. readme 상세히 작성한다, 기능 목록 업데이트 한다.
5. 함수를 입력, 출력, 검증 모두 나눈다. 함수당 15줄 이하로
6. indent 2 이하로

#### 2주차 피드백
```
https://docs.google.com/document/d/1QhiufVNV0ZixOPu99jFp1EN265dyN0WeXKcvtFNQ5nQ/edit#heading=h.dw22idnvgko3
```

## 기능 요구 사항

로또 게임 기능을 구현해야 한다. 로또 게임은 아래와 같은 규칙으로 진행된다.

- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
로또 1장의 가격은 1,000원이다.
당첨 번호와 보너스 번호를 입력받는다.
사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.

## 기능 목록

- [x] 로또 구입 금액 (money)을 입력 받는다. 값 유효 검사도 같이한다. - Numbers#inputMoney()
   - [x] money가 올바른 값이 아닐경우 false 리턴 - Numbers#validateForMoney()

- [x] 로또 구입 금액에 맞게 무작위로 로또 번호를 여러(money/1000)개 발행한다. - Numbers#createRandomLottoNumbers()

- [X] 6개의 로또 당첨 번호와 보너스 번호 1개를 입력받는다. - Numbers#inputLottoWinNumber()
   - [X] 각 숫자의 범위가 1~45 가 아니거나, 당첨 번호가 6자리가 아닐경우 예외 발생 - Lotto#validate()

- [X] 입력받은 당첨 번호와 무작위로 발행한 로또 번호들을 비교한다. - Results#compare()
   - [X] 로또 당첨 내역과 수익률을 출력한다. - Results#printResults()

- 해야할 일
   [X] 함수 15줄 아래로 바꾸기 (입력, 출력, 검증 모두 나눈다)
   [X] indent 2 이하인지 확인하기
   [X] 테스트 코드 추가하기