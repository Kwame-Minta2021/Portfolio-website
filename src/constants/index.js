import { python, cpp, java, e_commerce, robot_1, valve,
    gas_detector, rfid, robotics_1, smart_stick, arduino,
    jetson, raspberry_pi, proteus, fritzing, wireshark,
    ensp_simulator, latex, visual_studio,
    pycharm, matlab} from '../assets'

const projects = [
    {
        name: 'Waiter Robot',
        image: robot_1
    },
    {
        name: `IoT-Based fingerprint and RFID
        Attendance System`,
        image: rfid
    },
    {
        name: 'Automatic Drain Valve System',
        image: valve
    },
    {
        name:  `Centralized E-platform connecting
        farmers, consumers and sellers`,
        image: e_commerce
    },
    {
        name: `Smart Navigation Stick to empower the
        visually impaired`,
        image: smart_stick
    }
    // {
    //     name: `IoT-Based myltiputpose emergency detection
    //     system for fire outbreak and gas leakage`,
    //     image: gas_detector
    // }
]

const experience = [
    {
        name: 'Networking Intern',
        place: 'University of Mines and Technology',
        duration: 'Oct 2022 - Dec 2022'
    },
    {
        name: 'Intern',
        place: 'Inclusive Tech Group',
        duration: 'Oct 2022 - Dec 2022'
    },
    {
        name: 'Student Intern',
        place: 'CompTrust Data Privacy Company - UK',
        duration: 'May 2023 - Aug 2023'
    }
]

const skills = {
    programming_languages : [
        {
            name: 'Python',
            image: python
        },
        {
            name: 'C++',
            image: cpp
        },
        {
            name: 'Java',
            image: java
        }
    ],
    engineering_tools_and_software : [
        {
            name: 'MATLAB',
            image: matlab
        },
        {
            name: 'Arduino',
            image: arduino
        },
        {
            name: 'Jetson Nano',
            image: jetson
        },
        {
            name: 'Raspberry Pi',
            image: raspberry_pi
        },
        {
            name: 'Proteus',
            image: proteus
        },
        {
            name: 'Fritzing',
            image: fritzing
        },
        {
            name: 'Wireshark',
            image: wireshark
        },
        {
            name: 'ENSP Simulator',
            image: ensp_simulator
        },
        {
            name: 'LaTeX',
            image: latex
        },
        {
            name: 'Visual Studio',
            image: visual_studio
        },
        {
            name: 'PyCharm',
            image: pycharm
        }
    ]
}

const honors_and_awards = [
    {
        position: '1',
        suffix: 'st',
        kind: 'Winner',
        venue: 'UMaT Innovation and Career Fair Hackathon',
        date: 'July, 2022'
    },
    {
        position: '1',
        suffix: 'st',
        kind: 'Winner',
        venue: 'Delta Innovation Camp',
        date: 'May, 2023'
    },
    {
        position: '1',
        suffix: 'st',
        kind: 'Winner',
        venue: 'UMaT Innovation and Career Fair Hackathon',
        date: 'July, 2023'
    },
    {
        position: '1',
        suffix: 'st',
        kind: 'Runner-up',
        venue: 'Disability Inclusive Hackathon',
        date: 'Dec, 2021'
    },
    {
        position: 'Participation',
        suffix: '',
        kind: 'Represented UMaT',
        venue: `Tech in Ghana Conference`,
        date: 'May, 2022'
    }
]

const volunteering_experience = [
    {
        place: 'Agri-IoT',
        time: 'August, 2023',
        description: `Contributed to the Agri-IoT project by implementing
        Ardunio concepts, promoting innovation in agricultural technology
        as a volunteer`
    },
    {
        place: 'Aaenics - UMaT',
        time: 'April, 2023',
        description: `Trained over a 100 pupils from the Tarkwa Municipality
        in robotics and coding, fostering STEM education and digital literacy
        within the community`
    },
    {
        place: 'Inclusive Tech Group',
        time: 'Dec, 2022',
        description: `Served as a mentor for the 2022 DI-Hack competition
        at Inclusive Tech Group, providing guidance and support to
        participants in fostering innovation for accessibility`
    }
]

const leadership_role = [
    {
        position: 'President and Co-Founder',
        group: 'Tech Prodigies',
        duration: 'May 2021 - Present'
    },
    {
        position: 'Financial Secretary',
        group: 'Aaenics Community',
        duration: 'Jan 2022 - Dex 2022'
    },
    {
        position: 'Vice President',
        group: `Association of computer Science and
        Engineering Students`,
        duration: 'Oct 2022 - Oct 2023'
    },
    {
        position: 'President',
        group: 'Aaenics UMaT robotics club',
        duration: 'Jan 2023 - Present'
    },
    {
        position: 'President',
        group: 'National Union of Baptist Student',
        duration: 'Oct 2023 - Present'
    }
]

export { projects, experience, skills, honors_and_awards,
    volunteering_experience, leadership_role }