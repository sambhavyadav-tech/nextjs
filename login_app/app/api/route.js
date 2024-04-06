export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await tender.findByIdAndDelete(id);
  return NextResponse.json({ message: "Tender deleted" }, { status: 200 });
}