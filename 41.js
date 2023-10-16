class 사각형 {
  constructor(세로, 가로) {
    this._세로 = 세로;
    this._가로 = 가로;
  }

  get 가로() {
    return this._가로;
  }

  set 가로(값) {
    if (값 <= 0) {
      console.log('[오류] 가로길이는 0보다 커야 합니다.');
      return;
    } else if (typeof 값 !== 'number') {
      console.log('[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다.');
      return;
    }
    this._가로 = 값;
  }
  get 세로() {
    return this_.세로;
  }

  set 세로(값) {
    if (값 <= 0) {
      console.log('[오류] 세로길이는 0보다 커야 합니다.');
      return;
    } else if (typeof 값 !== 'number') {
      console.log('[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다.');
      return;
    }
    this._세로 = 값;
  }

  넓이() {
    const 계산 = this._가로 * this._세로
    console.log(`넓이는 ${계산}입니다.`);
  }

}
const 사각형인스턴스1 = new 사각형(10, 20)
사각형인스턴스1.넓이();

const 사각형인스턴스2 = new 사각형(10, 7)
사각형인스턴스2.넓이();
const 사각형인스턴스3 = new 사각형(15, 20)
사각형인스턴스3.넓이();