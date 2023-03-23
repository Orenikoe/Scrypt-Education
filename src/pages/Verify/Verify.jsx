/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-bitwise */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
import React, { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import LayoutOne from "../../layouts/LayoutOne";
import "./Verify.css";
import Button from "../../components/Button/Button";
import UserContext from "../../contexts/UserContext";
import VerifiedCertificate from "../../components/VerifiedCertificate/VerifiedCertificate";
import DropdownMenuStudents from "../../components/DropdownMenuStudents/DropdownMenuStudents";
import WarningMessage from "../../components/WarningMessage/WarningMessage";

function Verify() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({
    missing_file: null,
    missing_student: null,
  });
  const [filePath, setFilePath] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isVerified, setIsVerified] = useState(null);
  const [verifiedCertificate, setVerifiedCertificate] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [duplicatedCertificate, setDuplicatedCertificate] = useState(false);
  const { userDetails, searchUser } = useContext(UserContext);
  const openFile = useRef(null);
  const [expirationDate, setExpirationDate] = useState(null);

  const formattedExpirationDate = `${expirationDate?.getFullYear()}-${
    expirationDate?.getMonth() + 1
  }-${expirationDate?.getDate()} 00:00:00`;

  useEffect(() => {
    searchUser();
  }, []);

  const getCertificateDetails = (certificateId) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/gallery/${certificateId}`)
      .then((response) => response.json())
      .then((file) => {
        setVerifiedCertificate(() => file);
        setIsVerified(true);
      })
      .catch((err) => console.log(err));
  };

  const buttonHandler = () => {
    const fileData = new FormData();
    fileData.append("file", file, filePath);
    fileData.append("user", JSON.stringify(userDetails));
    fileData.append("path", JSON.stringify(filePath));
    fileData.append("student_id", selectedStudent);
    fileData.append("image", imageUrl);
    if (!formattedExpirationDate.includes("NaN")) {
      fileData.append("expiration_date", formattedExpirationDate);
    }

    const options = {
      method: "POST",
      body: fileData,
      headers: {
        Accept: "application/json",
      },
    };

    if (userDetails !== null && userDetails.role === "teacher") {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/issuecertificate`, options)
        .then((response) =>
          response.status === 409
            ? setDuplicatedCertificate(true)
            : response.json()
        )
        .then((data) => {
          getCertificateDetails(data.certificate_id);
          setErrors({ missing_student: null, missing_file: null });
          setSelectedStudent("Choose student");
          setExpirationDate(null);
        })
        .catch((err) => console.error(err));
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/verifybyfile`, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setIsVerified(true);
            setVerifiedCertificate(data[0]);
            setErrors({ missing_student: null, missing_file: null });
          } else {
            setIsVerified(false);
            setErrors({ missing_student: null, missing_file: null });
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const validateSubmission = () => {
    if (file === null) {
      setErrors({ ...errors, missing_file: true });
    } else if (selectedStudent === "") {
      setErrors({ ...errors, missing_student: true });
    } else if (
      errors.missing_file === false &&
      errors.missing_student === false
    ) {
      buttonHandler();
    }
  };

  const clickHandler = () => {
    openFile.current.click();
  };

  return (
    <LayoutOne>
      <div className="verify-page-container">
        {(userDetails && isVerified === null) ||
        (userDetails && isVerified === false) ? (
          <>
            <h1 className="certificates-gallery-title">
              {userDetails && userDetails.role === "teacher"
                ? "Issue a certificate"
                : "Verify a certificate"}
            </h1>
            <hr className="separation-line" />
          </>
        ) : null}
        <div className="verify-form-container">
          {userDetails && userDetails.role === "teacher" && !isVerified && (
            <>
              <div className="inputs-container">
                <h4 className="inputs-title">
                  Pick a student to issue the certificate:
                </h4>
                <DropdownMenuStudents
                  selectedStudent={selectedStudent}
                  setSelectedStudent={setSelectedStudent}
                  errors={errors}
                  onSelect={setErrors}
                />
                <h4 className="inputs-title">Set expiration date if needed:</h4>
                <DatePicker
                  selected={expirationDate}
                  className={
                    !expirationDate ? "with-calendar" : "without-calendar"
                  }
                  placeholderText="Date"
                  dateFormat="yyyy-MM-dd"
                  closeOnScroll={(e) => e.target === document}
                  onChange={(date) => setExpirationDate(date)}
                  showYearDropdown
                  scrollableMonthYearDropdown
                />

                <button
                  className="clear-filters-button-issue"
                  type="button"
                  onClick={() => {
                    setExpirationDate(null);
                    setSelectedStudent("Choose student");
                  }}
                >
                  Clean
                </button>
              </div>
              {duplicatedCertificate ? (
                <WarningMessage
                  setDuplicatedCertificate={setDuplicatedCertificate}
                />
              ) : null}
            </>
          )}
          {isVerified && (
            <VerifiedCertificate
              file={file}
              exitCertificate={setFile}
              verifiedCertificate={verifiedCertificate}
              setIsVerified={setIsVerified}
            />
          )}
          {isVerified === false && navigate("/file_not_found")}
          {isVerified === null && (
            <div
              style={{
                height:
                  userDetails?.role === "teacher"
                    ? "640px"
                    : userDetails?.role === "student"
                    ? "570px"
                    : "590px",
              }}
              className="verify-window-wrapper"
            >
              <div className="verify-window-exit">
                {userDetails ? null : (
                  <svg
                    onClick={() => navigate("/login")}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                      fill="#445C61"
                    />
                  </svg>
                )}
              </div>
              <div style={{ padding: "0 4rem" }}>
                <div className="title-wrapper">
                  <h2>
                    {userDetails && userDetails.role === "teacher"
                      ? "Submit certificate"
                      : "Verify certificate"}
                  </h2>
                </div>
                <div className="dnd-window" onClick={() => clickHandler()}>
                  {file === null ? (
                    <>
                      {" "}
                      <svg
                        width="32"
                        height="40"
                        viewBox="0 0 32 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8332 0.833313H4.49984C2.3915 0.833313 0.685671 2.55831 0.685671 4.66665L0.666504 35.3333C0.666504 37.4416 2.37234 39.1666 4.48067 39.1666H27.4998C29.6082 39.1666 31.3332 37.4416 31.3332 35.3333V12.3333L19.8332 0.833313ZM23.6665 27.6666H17.9165V33.4166H14.0832V27.6666H8.33317V23.8333H14.0832V18.0833H17.9165V23.8333H23.6665V27.6666ZM17.9165 14.25V3.70831L28.4582 14.25H17.9165Z"
                          fill="#445C61"
                          fillOpacity="0.5"
                        />
                      </svg>
                      <p
                        className="dnd-p-select"
                        style={{
                          padding:
                            errors.missing_file === false ? "0 4rem" : "0 2rem",
                        }}
                      >
                        {userDetails && userDetails.role === "teacher"
                          ? "Select a file to upload"
                          : "Select a file to upload and verify"}
                      </p>
                      <p
                        className="dnd-p-drag"
                        style={{
                          padding:
                            errors.missing_file === false ? "0 4rem" : "0 2rem",
                        }}
                      >
                        Or drag and drop it here
                      </p>
                    </>
                  ) : (
                    <>
                      <svg
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49989 12.9L2.59989 7.99999L0.966553 9.63333L7.49989 16.1667L21.4999 2.16666L19.8666 0.533325L7.49989 12.9Z"
                          fill="#15CF74"
                        />
                      </svg>
                      <p
                        className="dnd-p-select"
                        style={{
                          padding:
                            errors.missing_file === false ? "0 4rem" : "0 2rem",
                        }}
                      >
                        File upload successfully
                      </p>
                    </>
                  )}
                </div>
                {file && (
                  <>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.49992 0.666656H1.99992C1.08325 0.666656 0.333252 1.41666 0.333252 2.33332V15.6667C0.333252 16.5833 1.08325 17.3333 1.99992 17.3333H11.9999C12.9166 17.3333 13.6666 16.5833 13.6666 15.6667V4.83332L9.49992 0.666656ZM1.99992 15.6667V2.33332H8.66658V5.66666H11.9999V15.6667H1.99992ZM10.3333 7.33332V11.5C10.3333 13.3417 8.84159 14.8333 6.99992 14.8333C5.15825 14.8333 3.66659 13.3417 3.66659 11.5V6.08332C3.66659 4.85832 4.71659 3.88332 5.96659 4.00832C7.04992 4.11666 7.83325 5.10832 7.83325 6.19999V11.5H6.16658V6.08332C6.16658 5.84999 5.98325 5.66666 5.74992 5.66666C5.51659 5.66666 5.33325 5.84999 5.33325 6.08332V11.5C5.33325 12.4167 6.08325 13.1667 6.99992 13.1667C7.91658 13.1667 8.66658 12.4167 8.66658 11.5V7.33332H10.3333Z"
                        fill="#445C61"
                        fillOpacity="0.5"
                      />
                    </svg>
                    <span>{file.name}</span>
                    <svg
                      onClick={() => {
                        setErrors({ ...errors, missing_file: null });
                        setFile(null);
                      }}
                      style={{ cursor: "pointer" }}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66659 1.27334L8.72659 0.333344L4.99992 4.06001L1.27325 0.333344L0.333252 1.27334L4.05992 5.00001L0.333252 8.72668L1.27325 9.66668L4.99992 5.94001L8.72659 9.66668L9.66659 8.72668L5.93992 5.00001L9.66659 1.27334Z"
                        fill="#FF576B"
                      />
                    </svg>
                  </>
                )}
                <div className="error-line">
                  {(userDetails &&
                    userDetails.role === "teacher" &&
                    errors.missing_file === null) ||
                  errors.missing_file === true ? (
                    <p>The file is missing</p>
                  ) : null}
                  {userDetails &&
                  userDetails.role === "teacher" &&
                  errors.missing_student === null ? (
                    <p>Choose a student to complete the issuing process</p>
                  ) : null}
                </div>
                <div className="btn-wrapper">
                  <input
                    type="file"
                    ref={openFile}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setErrors({ ...errors, missing_file: false });
                      setFilePath(e.target.value);
                      setFile(e.target.files[0]);
                      const reader = new FileReader();
                      reader.readAsDataURL(e.target.files[0]);
                      reader.onloadend = (event) => {
                        setImageUrl(event.target.result);
                      };
                    }}
                  />
                  <Button
                    style={
                      (userDetails?.role === "teacher") &
                      (errors?.missing_file === false) &
                      (errors?.missing_student === false)
                        ? { marginTop: "40px" }
                        : null
                    }
                    className={
                      userDetails === null || userDetails.role === "student"
                        ? "Upload And Verify"
                        : "Issue certificate"
                    }
                    functionality={() =>
                      userDetails === null
                        ? buttonHandler()
                        : userDetails.role === "teacher"
                        ? validateSubmission()
                        : buttonHandler()
                    }
                    neededResources={errors}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </LayoutOne>
  );
}

export default Verify;
