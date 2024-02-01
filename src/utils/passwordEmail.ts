
export const passwordMail = async (email: any, password: any) => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}/api/email/passwordMail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })

        return res
};
