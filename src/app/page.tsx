import Agenda from "@/components/agenda/Agenda";
import Agendamento from "@/components/agendamento/Agendamento";

export default function Home() {
  return (
    <div className="w-full flex flex-row min-h-screen">
      <Agendamento />
      <Agenda />
    </div>
  );
}
