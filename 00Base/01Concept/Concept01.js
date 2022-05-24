/**
 * 프로그람 설명문서 주석
 * 2022.05. 23
 *
 *
 *           ===== 함수형 프로그라밍 =====
 *
 *      - 부수효과 를 피하는 프로그라밍 패러다임
 *      --> 부수효과 : 함수가 리턴 값이외에 하는 모든일
 *                   ( 문제가 발생할 수 있음 )
 *
 *      - 부수효과 없이 순수 함수( pure function )만 사용하는 프로그라밍 스타일
 *      --> 인자에만 의존하고 부수 효과가 없는 함수
 *
 *      --> 그러나 실용적인 측면에서 부수효과 + 순수하지 않은 함수를 사용
 */

/**
 *          ===== 함수형 프로그라밍 =====
 *
 *      1. 수학 함수( 순수 함수 )를 사용하고 부수 효과를 피하는 것이 특징인 프로그라밍 패러다임
 *
 *      2. 부수 효과 없이 순수 함수만 사용하는 프로그라밍 스타일
 */

/**
 *          ===== 액션과 계산 , 데이터 구분 =====
 *
 *      --> 함수형 프로그라머 는 코드를 분류함
 *
 *      1. 액션
 *      --> 실행 시점 ,or 횟수 에 의존
 *
 *      2. 계산
 *      --> 입력값을 계산해 출력하는 것
 *          ( 언제어디서나 같음 - 외부 영향 X )
 *
 *      3. 데이터
 *      --> 이벤트에 대한 사실 기록
 *          ( 이 데이터를 가지고 여러 형태로 사용, 해석 가능 )
 *
 *      -------------------------------------------------------------------
 *
 *      - 액션, 계산 , 데이터를 구분하는 것이 함수형 프로그라밍의 기본 개념
 *      --> 실행 시점이나 횟수에 의존하는 코드를 없애면 더 쉽게 이해할 수 있고 심각한
 *          버그를 막을 수 있음
 *      --> 코드를 데이터와 계산으로 바꿀수록 문제를 해결할 수 있음
 *
 */

/**
 *          ===== 함수형 사고 =====
 *
 *      - 함수형 사고에서 가장 중요한 두가지
 *
 *      1. 액션, 계산 , 데이터 를 구분해서 생각하는 것
 *      --> 다시말하지만 액션은 시간에 의존함( 따라서 분리해야함 )
 *      --> 따라서, 가급적 코드를 계산으로 바꾸는 것이 좋음
 *
 *      2. 일급 추상( first-class abstraction )
 *      --> 일단은 함수에 함수를 인자로 넘긴다고 생각하면 되나...?
 */
title('dsfsdf');
debugger;