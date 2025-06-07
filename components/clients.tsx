export default function Clients() {
  const clients = [
    { name: "Somaliland Civil Service Commission", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Ministry of Information", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Electoral Commission", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Ministry of Transport", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Sports Commission", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Immigration Department", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Happy Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading government institutions and organizations across Somaliland to deliver exceptional
            communication and design solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
