import { NextResponse, type NextRequest } from "next/server";
type BodyType = {
  email: string;
  pwd: string;
  repwd: string;
  account: boolean;
};

type AccType = {
  email: string;
  pwd: string;
};

const accounts: Array<AccType> = [];
const POST = async (req: NextRequest) => {
  const body: BodyType = await req.json();
  if (body.account) {
    const state = accounts.find(
      (account) => account.email === body.email && account.pwd === body.pwd,
    );
    if (state) return NextResponse.json({ status: 200, msg: "User Found" });

    return NextResponse.json({
      status: 404,
      msg: "User Not Found",
    });
  }
  if (body.pwd === body.repwd) {
    accounts.push({ email: body.email, pwd: body.pwd });
    return NextResponse.json({
      status: 201,
      msg: "User Added",
      email: body.email,
    });
  }

  return NextResponse.json({
    status: 400,
    msg: "Bad Input",
    email: body.email,
  });
};

export { POST };
