
import { ServiceDetailPage } from '@/components/ServiceDetailPage'

export default function ServiceDetail() {
  // Fetch your service data here
  const serviceData = {
    category: "Solar Power",
    title: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
    readTime: "9 min read",
    date: "December 11, 2023",
    author: {
      name: "Leslie Alexander",
      role: "Solar energy specialist",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Leslie Alexander is a distinguished Solar Energy Specialist at the forefront of the renewable energy revolution. With a passion for sustainable technology and a commitment to addressing the global energy crisis, Leslie has dedicated her career to advancing the field of solar energy."
    },
    heroImage: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: (
      <>
        <p className="text-lg mb-10">In a world increasingly concerned with environmental sustainability and the search for renewable energy sources, solar power has emerged as a shining star. Harnessing the power of the sun, solar energy offers a clean and inexhaustible solution to our growing energy needs.</p>
        <p className="text-lg mb-16">This article delves into the fascinating world of solar energy, exploring its mechanisms, benefits, and the transformative impact it can have on our planet.</p>
        <h4 className="text-3xl font-medium mb-8">The Basics of Solar Energy</h4>
        <h5 className="text-xl font-medium mb-6">1. Photovoltaic Cells</h5>
        <div className="inline-flex mb-6">
          <span className="pt-2">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#BEF264"></circle></svg>
          </span>
          <p className="text-lg ml-4">Solar panels are made up of photovoltaic (PV) cells that convert sunlight into electricity.</p>
        </div>
        <div className="inline-flex mb-8">
          <span className="pt-2">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#BEF264"></circle></svg>
          </span>
          <p className="text-lg ml-4">When sunlight hits the PV cells, it excites electrons, generating an electric current.</p>
        </div>
        <h5 className="text-xl font-medium mb-6">2. Solar Thermal Systems</h5>
        <div className="inline-flex mb-6">
          <span className="pt-2">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#BEF264"></circle></svg>
          </span>
          <p className="text-lg ml-4">Concentrated solar power (CSP) systems use mirrors or lenses to focus sunlight onto a small area, producing heat that can then be used to generate electricity.</p>
        </div>
        <h5 className="text-xl font-medium mb-6">3. Net Metering</h5>
        <div className="inline-flex mb-16">
          <span className="pt-2">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#BEF264"></circle></svg>
          </span>
          <p className="text-lg ml-4">Solar energy systems often incorporate net metering, allowing users to sell excess electricity back to the grid, promoting energy efficiency.</p>
        </div>
      </>
    ),
    testimonial: {
      quote: "Thanks to Flow, my energy is now solar-powered – sustainable, efficient, and exceptional service.",
      author: {
        name: "Cody Fisher",
        role: "Solar energy service",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    },
    relatedPosts: [
      {
        title: "Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts",
        excerpt: "Discover the potential of wind energy in revolutionizing our power systems...",
        image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        author: {
          name: "John Doe",
          image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        readTime: "7 min read"
      },
      // Add more related posts here
    ]
  }

  return <ServiceDetailPage {...serviceData} />
}

