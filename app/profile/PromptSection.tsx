import styles from './page.module.css';

interface Props {
    prompt: string,
    answer: string
}

export default function PromptSection({prompt, answer}: Props) {
    return (
        <div className={styles.promptCard}>
            <p>{prompt}</p>
            <h3>{answer}</h3>
        </div>
    )
}