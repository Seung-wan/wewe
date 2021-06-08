import { Message, Button } from "semantic-ui-react";

export const NoProfilePosts = () => (
  <>
    <Message
      info
      icon="meh"
      header="게시글이 없습니다."
      content="게시글을 작성해보세요."
    />
    <Button
      icon="long arrow alternate left"
      content="Go Back"
      as="a"
      href="/"
    />
  </>
);

export const NoFollowData = ({ followersComponent, followingComponent }) => (
  <>
    {followersComponent && (
      <Message icon="user outline" info content={`팔로워가 없습니다.`} />
    )}

    {followingComponent && (
      <Message icon="user outline" info content={`팔로잉한 유저가 없습니다.`} />
    )}
  </>
);

export const NoMessages = () => (
  <Message
    info
    icon="telegram plane"
    header="대화상대가 없습니다."
    content="검색을 통하여 대화를 시작하세요."
  />
);

export const NoPosts = () => (
  <Message
    info
    icon="meh"
    header="게시글이 없습니다!"
    content="글을 작성하거나 다른 사람을 팔로우하세요."
  />
);

export const NoProfile = () => (
  <Message info icon="meh" header="Hey!" content="No Profile Found." />
);

export const NoNotifications = () => (
  <Message content="알림이 없습니다." icon="smile" info />
);

export const NoPostFound = () => (
  <Message info icon="meh" header="Hey!" content="No Post Found." />
);
