import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";

const Conversation = () => {
    return ( 
        <>
        <div>
          <Heading
          title="Conversation"
          description="Our most advanced conversation modal. "
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="text-violet-500/10"
          />
        </div>
        </>
      );
}
 
export default Conversation;