/**
 * @description 토큰 타입 정의
 * @Schema grantType = JWT Grant Type
 * @Schema accessToken = JWT Access Token
 * @Schema refreshToken = JWT Refresh Token
 */
export interface IAuthToken {
    grantType?: string
    accessToken: string
    refreshToken: string
}
/**
 * @description 로그인시 필요한 form 타입 정의
 * @Schema loginId = 사용자 계정 아이디
 * @Schema password = 사용자 계정 비밀번호
 */
export interface ILoginRequest {
    loginId: string;
    password: string;
}
