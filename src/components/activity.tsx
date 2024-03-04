function Activity() {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Activities</h2>
            <ul>
              <li>Regular Exercise</li>
              <li>Basic Stretching</li>
              <li>Self defence</li>
              <li>Kicks and Punches</li>
              <li>Tae-gueks</li>
            </ul>
          </div>
          <div className="p-8 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Venue and Timing</h2>
            <ul>
              <li>
                Taekwondo Arena, PE Ground (Opposite to the main gate of
                Stadium)
              </li>
              <li>
                06:30 pm to 08:00 pm (Monday to Friday) 06:30 pm to 07:00 pm -
                Exercise 07:00 pm to 08:00 pm - Taekwondo Practice
              </li>
            </ul>
          </div>
          <div className="p-8 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">HOW TO JOIN</h2>
            <ul>
              <li>
                Come to TKD Arena and meet our Coach or Any of Coordinator/
                Secretary present there..
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
