import {
  FaTasks,
  FaLifeRing,
  FaCogs,
  // FaChartBar,
  FaPlus,
  FaList,
  FaPlay,
  FaStop,
  FaHistory,
} from "react-icons/fa";

export const dashboardSections = [
  {
    items: [
      {
        title: "Task",
        subtitle: "Create & Track",
        icon: <FaTasks />,
        features: [
          { title: "Create Task", icon: <FaPlus /> },
          { title: "Task List", icon: <FaList /> },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "Support",
        subtitle: "Service Desk",
        icon: <FaLifeRing />,
        features: [{ title: "Service Request", icon: <FaPlus /> }],
      },
    ],
  },
  {
    items: [
      {
        title: "Enter Details for Portals",
        subtitle: "Details Entry",
        icon: <FaCogs />,
        features: [
          { title: "Add List", icon: <FaPlus /> },
          { title: "Enter Details", icon: <FaPlay /> },
          { title: "MyList", icon: <FaStop /> },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "Help Content",
        subtitle: "Details Entry",
        icon: <FaCogs />,
        features: [
          { title: "Add", icon: <FaPlus /> },
          { title: "List", icon: <FaPlay /> },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "GGDM",
        subtitle: "Details Entry",
        icon: <FaCogs />,
        features: [
          { title: "Fill Form", icon: <FaPlus /> },
          { title: "List Form", icon: <FaPlay /> },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "IPP",
        subtitle: "Details Entry",
        icon: <FaCogs />,
        features: [
          { title: "Add User", icon: <FaPlus /> },
          { title: "IP Proposal Form", icon: <FaPlay /> },
          { title: "IP Proposal List", icon: <FaStop /> },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "CHRON",
        subtitle: "Scheduler",
        icon: <FaCogs />,
        features: [
          { title: "Chron", icon: <FaPlus /> },
          { title: "Run Job", icon: <FaPlay /> },
          { title: "Stop Job", icon: <FaStop /> },
          { title: "History", icon: <FaHistory /> },
          { title: "Logs", icon: <FaList /> },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "LCM",
        subtitle: "Description",
        icon: <FaCogs />,
        features: [
          { title: "Active List(Lab Wise)", icon: <FaPlus /> },
          { title: "Add Delegate User", icon: <FaPlay /> },
          { title: "Add New", icon: <FaStop /> },
          { title: "All Closed List", icon: <FaHistory /> },
          { title: "Analytics", icon: <FaList /> },
          { title: "Authorised Officer's", icon: <FaList /> },
          { title: "Forwarded Cases", icon: <FaList /> },
          { title: "My Closed List", icon: <FaList /> },
          { title: "My List", icon: <FaList /> },
        ],
      },
    ],
  },
];
