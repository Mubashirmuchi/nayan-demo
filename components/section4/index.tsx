import React from 'react'

const Section4 = () => {
  return (
   <section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto space-y-16">

    {/* ---- STAGES ---- */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {/* Stage 1 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white text-3xl">
          ✔
        </div>
        <p className="text-xs uppercase tracking-wide text-gray-500">1. Stage</p>
        <p className="text-xl font-semibold">Planning</p>
        <p className="text-gray-500 text-sm">Completed</p>
      </div>

      {/* Stage 2 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white text-3xl">
          ✔
        </div>
        <p className="text-xs uppercase tracking-wide text-gray-500">2. Stage</p>
        <p className="text-xl font-semibold">Building</p>
        <p className="text-gray-500 text-sm">Completed</p>
      </div>

      {/* Stage 3 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 text-white text-3xl">
          ⏳
        </div>
        <p className="text-xs uppercase tracking-wide text-gray-500">3. Stage</p>
        <p className="text-xl font-semibold">Finishing works</p>
        <p className="text-gray-500 text-sm">In progress</p>
      </div>

      {/* Stage 4 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-gray-400 text-3xl">
          ✕
        </div>
        <p className="text-xs uppercase tracking-wide text-gray-400">4. Stage</p>
        <p className="text-xl font-semibold text-gray-400">Project done</p>
        <p className="text-sm text-gray-400">Not completed</p>
      </div>
    </div>

    {/* ---- CONTENT ---- */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* IMAGE/SLIDER placeholder */}
      <div className="relative p-6 border-4 border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Architecture & Design</h3>
        <div className="w-full h-64 bg-gray-500"></div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          <div className="h-2 w-2 bg-black rounded-full"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* TEXT Column */}
      <div className="space-y-10">
        <div>
          <h4 className="text-lg font-semibold mb-2">High quality materials</h4>
          <p className="text-gray-600">
            Proin orci nisl, posuere viverra erat ut, pellentesque interdum urna. 
            Curabitur eu risus convallis, auctor augue id, pharetra neque. Morbi 
            pretium neque ac varius imperdiet. Aliquam sed sapien eget massa hendrerit 
            aliquet. Integer auctor vel ligula eget faucibus
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Soundproof rooms</h4>
          <p className="text-gray-600">
            Donec tincidunt fermentum purus, eu pharetra arcu scelerisque a. 
            Maecenas felis eros, volutpat ac justo non, imperdiet porttitor lorem. 
            Nulla suscipit mi a arcu sollicitudin, sit amet
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Section4
