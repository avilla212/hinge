import styles from '../app/page.module.css';

interface Props {
    prompt: string,
    answer: String
}

export default function PromptSection({prompt, answer}: Props) {
    return (
        <div className={styles.promptCard}>
            <p>{prompt}</p>
            <h3>{answer}</h3>
        </div>
    )
}