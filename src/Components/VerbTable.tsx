import React from "react";

export type VerbData = [
  [string, string, string, string, string, string],
  [string, string, string, string, string, string],
  [string, string, string, string, string, string],
  [string, string, string, string, string, string],
  [string, string, string, string, string, string],
  [string, string, string, string, string, string],
  [string, string, string, string, string, string],
  string, string
];

export function VerbTable(props: {
  source: string,
  translationData: string;
}) {
  const translations = JSON.parse(props.translationData);
  const [verbData, setVerbData] = React.useState(JSON.parse(props.source));

  React.useEffect(() => {
    (async () => {
      const verbData = await fetch(`/verbtables/${props.source}.json`);
      setVerbData(verbData);
    })();
  }, [props.source]);

  return <table className="verb-table w-full">
    <caption>
      <strong>{translations.table} {verbData.reference}</strong> {translations.caption}
    </caption>
    <tbody>
      <tr>
        <th className="primary-header">Mol</th>
      </tr>
      <tr>
        <td>
          <table className="w-full">
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>
                  {translations.indicativeMood}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{translations.presentTense}</th>
                <th>{translations.pastTense}</th>
                <th>{translations.pastHabitualTense}</th>
                <th>{translations.futureTense}</th>
              </tr>
            </thead>
            <tbody>
              {
                [0, 1, 2, 3, 4, 5].map(x =>
                  <tr key={x}>
                    <td>{verbData.indicative.present[x]}</td>
                    <td>{verbData.indicative.past[x]}</td>
                    <td>{verbData.indicative.pastHabitual[x]}</td>
                    <td>{verbData.indicative.future[x]}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="w-full">
            <colgroup>
              <col className="w-[33%]" />
              <col className="w-[33%]" />
              <col className="w-[33%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{translations.conditionalMood}</th>
                <th>{translations.presentSubjunctiveMood}</th>
                <th>{translations.imperativeMood}</th>
              </tr>
            </thead>
            <tbody>
              {
                [0, 1, 2, 3, 4, 5].map(x =>
                  <tr key={x}>
                    <td>{verbData.conditional[x]}</td>
                    <td>{verbData.presentSubjunctive[x]}</td>
                    <td>{verbData.imperative[x]}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="w-full">
            <colgroup>
              <col className="w-[50%]" />
              <col className="w-[50%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{translations.verbalNoun}</th>
                <th>{translations.verbalAdjective}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{verbData.verbalNoun}</td>
                <td>{verbData.verbalAdjective}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>;
}
