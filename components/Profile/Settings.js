import React, { useState, useEffect, useRef } from "react";
import {
  List,
  Divider,
  Message,
  Checkbox,
  Form,
  Button,
} from "semantic-ui-react";
import { passwordUpdate, toggleMessagePopup } from "../../utils/profileActions";

function Settings({ newMessagePopup }) {
  const [passwordFields, showPasswordFields] = useState(false);

  const [newMessageSettings, showNewMessageSettings] = useState(false);

  const isFirstRun = useRef(true);
  const [popupSetting, setPopupSetting] = useState(newMessagePopup);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    success && setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
  }, [popupSetting]);

  return (
    <>
      {success && (
        <>
          <Message success icon="check circle" header="Updated Successfully" />
          <Divider hidden />
        </>
      )}

      <List size="huge" animated>
        <List.Item>
          <List.Icon name="user secret" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header
              onClick={() => showPasswordFields(!passwordFields)}
              as="a"
              content="비밀번호 변경"
            />
          </List.Content>

          {passwordFields && (
            <UpdatePassword
              setSuccess={setSuccess}
              showPasswordFields={showPasswordFields}
            />
          )}
        </List.Item>
        <Divider />

        <List.Item>
          <List.Icon
            name="paper plane outline"
            size="large"
            verticalAlign="middle"
          />

          <List.Content>
            <List.Header
              onClick={() => showNewMessageSettings(!newMessageSettings)}
              as="a"
              content="팝업창 ON / OFF"
            />
          </List.Content>

          <div style={{ marginTop: "10px" }}>
            알림을 설정할지 선택하세요
            <br />
            <br />
            <Checkbox
              checked={popupSetting}
              toggle
              onChange={() =>
                toggleMessagePopup(popupSetting, setPopupSetting, setSuccess)
              }
            />
          </div>
        </List.Item>

        <Divider />
      </List>
    </>
  );
}

const UpdatePassword = ({ setSuccess, showPasswordFields }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState(null);

  const [userPasswords, setUserPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [typed, showTyped] = useState({
    field1: false,
    field2: false,
  });

  const { field1, field2 } = typed;

  const { currentPassword, newPassword } = userPasswords;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserPasswords((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    errorMsg && setTimeout(() => setError(null), 5000);
  }, [errorMsg]);

  return (
    <>
      <Form
        error={errorMsg !== null}
        loading={loading}
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);

          await passwordUpdate(setSuccess, userPasswords);
          setLoading(false);

          showPasswordFields(false);
        }}
      >
        <List.List>
          <List.Item>
            <Form.Input
              fluid
              icon={{
                name: "eye",
                circular: true,
                link: true,
                onClick: () =>
                  showTyped((prev) => ({ ...prev, field1: !field1 })),
              }}
              type={field1 ? "text" : "password"}
              iconPosition="left"
              label="현재 비밀번호"
              placeholder="현재 비밀번호를 입력하세요"
              name="currentPassword"
              onChange={handleChange}
              value={currentPassword}
            />

            <Form.Input
              fluid
              icon={{
                name: "eye",
                circular: true,
                link: true,
                onClick: () =>
                  showTyped((prev) => ({ ...prev, field2: !field2 })),
              }}
              type={field2 ? "text" : "password"}
              iconPosition="left"
              label="새로운 비밀번호"
              placeholder="새로운 비밀번호를 입력하세요"
              name="newPassword"
              onChange={handleChange}
              value={newPassword}
            />

            {/* BUTTONS */}

            <Button
              disabled={loading || currentPassword === "" || newPassword === ""}
              compact
              icon="configure"
              type="submit"
              color="teal"
              content="변경"
            />

            <Button
              disabled={loading}
              compact
              icon="cancel"
              type="button"
              content="취소"
              onClick={() => showPasswordFields(false)}
            />

            <Message icon="meh" error header="Oops!" content={errorMsg} />
          </List.Item>
        </List.List>
      </Form>
      <Divider hidden />
    </>
  );
};

export default Settings;
