export const projects = [
    {
        title: 'WatchOut',
        imgUrl: '/images/distributed-system-3.png',
        stack: ['Java', 'gRPC', 'ProtocolBuffers', 'MQTT', 'REST'],
        link : 'https://github.com/Simi24/DistributedSystemProject',
        description : "”WatchOut” is a simulation of hide‐and‐seek game where players use smartwatches to coordinate and monitor their heart rate in real‐time. Includes an administration server, a game management client, and a peer‑to‑peer system for players, with algorithms for leader election and mutual exclusion in distributed system, management of access to the home base, and health monitoring. Developed in Java using gRPC and Protocol Buffers (protobuf) for communication between players, REST for the server‑client interface, Mosquitto Broker for MQTT, and advanced thread synchronization and signaling techniques to prevent concurrency issues."
    },
    {
        title: 'rideIt',
        imgUrl: '/images/swift.png',
        stack: ['Swift', 'SwiftUI', 'CoreData', 'MapKit', 'CreateML'],
        link : 'https://github.com/Simi24/rideIt',
        description : "”rideIt” is a mobile application for iOS that allows users to track their bike rides, view statistics and know their riding behavior inferred by Machine Learning model. The app uses Core Data to store the user's rides, MapKit to display the user's location and route on a map, Core Location to track the user's location. I used CreateML to create a Machine Learning model that infer the riding behavior using inertial data collected directly on the smartphone during the ride. Developed in Swift using SwiftUI for the user interface."
    },
    {
        title: 'Kafka-secure-ha-cluster',
        imgUrl: '/images/kafka.png',
        stack: ['Kafka', 'Zookeeper', 'Docker', 'SASL_SSL', 'python'],
        link : 'https://github.com/Simi24/kafka-secure-ha-cluster',
        description : "A secure and highly available Kafka cluster with 3 brokers and 3 Zookeepers running in Docker containers. The cluster is secured with SASL_SSL authentication and ACLs. Developed using Docker, Kafka, Zookeeper, and 3 microservices built in python."
    },
    {
        title: 'TwitTok',
        imgUrl: '/images/reactNative.png',
        stack: ['ReactNative', 'JavaScript', 'Android', 'Java', 'Room', 'Retrofit'],
        link : 'https://github.com/Simi24/twitTokAndroidSourceCode',
        description : "”TwitTok” is a social media application that allow users to share twit and visualize twit of other users in a TikTok style. The app was developed both in React Native and Android. The Android version was developed in Java using Room for the local database, Retrofit for the network requests, and SQLite for the local database. The React Native version was developed in JavaScript."
    }
    
]