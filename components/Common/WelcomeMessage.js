import { Icon, Message, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <Message
      color="teal"
      attached
      header={signupRoute ? "회원가입" : "환영합니다"}
      icon={signupRoute ? "settings" : "privacy"}
      content={
        signupRoute
          ? "새로 계정을 만드세요"
          : "이메일과 비밀번호로 로그인하세요"
      }
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <>
      {signupRoute ? (
        <>
          <Message attached="bottom" warning>
            <Icon name="help" />
            아이디가 존재하나요? <Link href="/login"> 여기서 로그인하세요</Link>
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="bottom" info>
            <Icon name="lock" />
            <Link href="/reset">비밀번호 찾기</Link>
          </Message>

          <Message attached="bottom" warning>
            <Icon name="help" />
            새로 오셨나요?<Link href="/signup"> 여기서 회원가입하세요</Link>
          </Message>
        </>
      )}
    </>
  );
};
