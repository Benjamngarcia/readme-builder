import { useEditorContext } from "../../../context/EditorContext";
import TextInput from "../TextInput";

const GithubStats: React.FC = () => {
  const { statsWidgetDetails, setStatsWidgetDetails } = useEditorContext();

  return (
    <div className="space-y-4 min-h-[60vh]">
      <TextInput
        value={statsWidgetDetails.profile}
        onChange={(e) =>
          setStatsWidgetDetails({
            ...statsWidgetDetails,
            profile: e.target.value,
          })
        }
        placeholder="GitHub Username"
        label="GitHub Profile"
      />
      <TextInput
        value={statsWidgetDetails.theme}
        onChange={(e) =>
          setStatsWidgetDetails({ ...statsWidgetDetails, theme: e.target.value })
        }
        placeholder="Theme (e.g., dark, light)"
        label="Theme"
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={statsWidgetDetails.hideBorder}
          onChange={(e) =>
            setStatsWidgetDetails({
              ...statsWidgetDetails,
              hideBorder: e.target.checked,
            })
          }
        />
        <label className="ml-2">Hide Border</label>
      </div>
    </div>
  );
};

export default GithubStats;
