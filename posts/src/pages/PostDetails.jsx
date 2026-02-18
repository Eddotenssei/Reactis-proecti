import { useParams } from "react-router";

export default function PostDetails() {
  const { id } = useParams();

  return <div>This is Posts Details</div>;
}
