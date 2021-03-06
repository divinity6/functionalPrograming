/**
 * 프로그람 설명문서 주석
 * 2022.05. 29
 *
 *
 *           ===== 직접 구현 =====
 *
 *      - 코드를 작성하기 전에 호출 그래프를 그려보는 습관을 들이는 것이 좋다
 *        ( 다이어그램을 그리면서... )
 *
 *      - 함수 이름으로 그 함수가 어느곳에 위치할지 결정할 수 있다
 *      --> 그 함수가 나타내는 추상화를 보면서 선택하면 된다
 *      --> 반드시 호출 그래프의 화살표는 아래를 향해야 한다
 *
 */

title( '추상화 단계 연습' );
{
}
/**
 *           ===== 추상화 단계 연습 =====
 *
 *      -- 최상위 --
 *      - freeTieClip() // 무료 넥타이 클립 제공
 *      - cartTax()     // 세금 계산하기
 *      - gets_free_shipping()  // 무료 배송이 되는지 확인하기
 *
 *      -- 차상위 --
 *      - make_item()   - add_item()    - isInCart()    - remove_item_by_name()
 *      - calc_total()  - setPriceByName()
 *
 *
 *
 *      --> 와, 이거 진짜 생각하고 해볼라고 하니깐 잘안되네...
 *      ----> 어지럽다...
 */

/**
 *           ===== 같은 계층에 있는 함수는 같은 목적을 가져야 한다 =====
 *
 *     - 예) 각 계층의 목적의 예시
 *     ----------------------------------------------------------------
 *
 *      - 1 계층.              - 장바구니 비즈니스 규칙
 *
 *      - 2 계층.              - 일반적인 비즈니스 규칙
 *
 *      - 3 계층.              - 장바구니 기본 동작
 *
 *      - 4 계층.              - 제품에 대한 기본 동작
 *
 *      - 5 계층.              - 카피-온-라이트 동작
 *
 *      - 6 계층.              - JS 언어 기능
 *
 *     ----------------------------------------------------------------
 *
 *     - 각 계층은 추상화 수준이 다르기 때문에, 어떤 계층에 있는 함수를 읽거나 고칠 때
 *       낮은 수준의 구체적인 내용은 신경쓰지 않아도 된다
 *     --> 예) 장바구니 비즈니스 규칙 계층의 함수를 쓸 때 장바구니가 배열로 구현되어
 *             있다는 것 같은 구체적인 내용은 신경쓰지 않아도 된다
 *
 *
 *     - 직접 구현은 계층형 설계를 잘하기 위한 방법중 첫 번째 패턴일 뿐이다!!
 */