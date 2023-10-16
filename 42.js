class 자동차 {
  constructor(모델명, 출시년도, 종류, 가격){
    this._모델명 = 모델명;
    this._출시년도 = 출시년도;
    this._종류 = 종류;
    this._가격 = 가격;
  }

  get 모델명() {
    return this._모델명;
  }

  set 모델명(수치){
    //유효성검사가 필요함
    if(수치.length <= 0){
      console.log('[오류] 모델명이 입력되지 않았습니다.');
      return;
    } else if(typeof 수치 !== 'string'){
      console.log('[오류] 입력된 모델명이 문자형이 아닙니다.');
      return;
    }
    this._모델명 = 수치;
  }

  get 출시년도() {
    return this._출시년도;
  }

  set 출시년도(수치){
    //유효성검사가 필요함
    if(수치.length !== 4){
      console.log('[오류] 입력된 년도가 4자리가 아닙니다.');
      return;
    } else if(typeof 수치 !== 'number'){
      return;
    }
    this._출시년도 = 수치;
  }

  get 종류() {
    return this._종류;
  }

  set 종류(수치){
    if(수치.length <= 0){
      console.log('[오류] 종류가 입력되지 않았습니다.');
      return;
    } else if (수치 !== '가솔린' && 수치 !== '디젤' && 수치 !== '전기' ){
      console.log('[오류] 입력된 종류가 잘못되었습니다. ');
      return;
    }
    this._종류 = 수치;
  }

  get 가격() {
    return this._가격;
  }

  set 가격(수치){
    if(typeof 수치 !== 'number'){
      console.log('[오류] 입력된 가격이 숫자가 아닙니다.');
      return;
    } else if(수치 < '1000000'){
      console.log('[오류] 가격은 100만원보다 작을 수 없습니다.');
      return;
    }

    this._가격 = 수치;

  }



//클락션 울리는 메소드
  클락션(){
    console.log(`${this.모델명} 뛰뛰빵빵!`);
  }

  몇년도모델(){
    console.log(`${this.모델명}는 ${this.출시년도}년에 출시되었어요!`);
  }
}




// 차 만들기
const 첫째차 = new 자동차('소나타', '2077', '가솔린', 5000)
첫째차.클락션();
첫째차.몇년도모델();
const 둘째차 = new 자동차('제네시스', '2080', '가솔린', 7000);
const 셋째차 = new 자동차('아반떼', '2099', '가솔린', 6000);

둘째차.클락션();
둘째차.몇년도모델();
셋째차.클락션();
셋째차.몇년도모델();

console.log('**********');
console.log(첫째차.모델명);

첫째차.모델명 = '비틀';

console.log(첫째차.모델명);