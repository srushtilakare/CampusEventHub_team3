import { EventDetailsPage } from "@/components/events/event-details-page"

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  return <EventDetailsPage eventId={params.id} />
}
