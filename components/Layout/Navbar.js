// import React from "react";
// import { Menu, Container, Icon } from "semantic-ui-react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// function Navbar() {
//   const router = useRouter();
//   const isActive = (route) => (router.pathname = route);
//   return (
//     <Menu fluid borderless>
//       <Container text>
//         <Link href="/login">
//           <Menu.Item header active={isActive("/login")}>
//             <Icon size="large" name="sign in" />
//             로그인
//           </Menu.Item>
//         </Link>
//         <Link href="/signup">
//           <Menu.Item header active={isActive("/signup")}>
//             <Icon size="large" name="signup" />
//             회원가입
//           </Menu.Item>
//         </Link>
//       </Container>
//     </Menu>
//   );
// }

// export default Navbar;
import React from "react";
import { Menu, Container, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    <Menu fluid borderless>
      <Container text>
        <Link href="/login">
          <Menu.Item header active={isActive("/login")}>
            <Icon size="large" name="sign in" />
            로그인
          </Menu.Item>
        </Link>

        <Link href="/signup">
          <Menu.Item header active={isActive("/signup")}>
            <Icon size="large" name="signup" />
            회원가입
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default Navbar;
