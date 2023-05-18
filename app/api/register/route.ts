import prisma from "@/app/libs/prismaDb";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { DEFAULT_ERROR } from "@/app/constants";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const { email, name, password } = body;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 422,
        }
      );
    }
    const hashedPassword = await hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: DEFAULT_ERROR,
      },
      {
        status: 400,
      }
    );
  }
}
