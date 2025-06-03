interface PropertyPageProps {
  params: { PropertyId: string };
}
const page = async ({ params }: PropertyPageProps) => {
  const { PropertyId } = await params;
  console.log(await PropertyId);
  const response = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/Property/${PropertyId}`
  );
  const property = await response.json();
  return <div>{property.title}</div>;
};
export default page;
